import Product from "../models/product.model.js";
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";

// Controller to create product
export const createProduct = async (req, res) => {
  try {
    // Destructure product details from request body
    const {
      category,
      subcategory,
      name,
      rating,
      skuCode,
      mrpPrice,
      salePrice,
      availability,
      status,
      featuredProduct,
      latestProduct,
      bestSellingProduct,
      specialProduct,
      newProduct,
      smallInfo,
      description,
      color, // Array of colors corresponding to each image
      size, // Array of sizes corresponding to each image
    } = req.body;

    // Map uploaded files to an array of image objects
    const images = req.files.map((file, index) => ({
      image: file.path,
      color: color[index], // Associate color with each image
      size: size[index], // Associate size with each image
    }));

    // Upload all images to Cloudinary
    const uploadPromises = images.map((image) => cloudinary.uploader.upload(image.image));
    const results = await Promise.all(uploadPromises);

    // Extract secure URLs and public IDs from Cloudinary response
    const productImages = results.map((result) => ({
      image: result.secure_url,
      cloudinary_id: result.public_id,
    }));

    // Create product object with image URLs, Cloudinary IDs, and other details
    const product = new Product({
      category,
      subcategory,
      name,
      rating,
      skuCode,
      mrpPrice,
      salePrice,
      availability,
      status,
      featuredProduct,
      latestProduct,
      bestSellingProduct,
      specialProduct,
      newProduct,
      smallInfo,
      description,
      items: productImages.map((image, index) => ({
        image: image.image,
        cloudinary_id: image.cloudinary_id,
        color: color[index],
        size: size[index],
      })),
    });

    // Save the product to the database
    await product.save();

    // Delete uploaded files from the server
    images.forEach((image) => {
      fs.unlinkSync(image.image);
    });

    // Return success response with created product
    return res.status(201).json({ success: true, message: "Product created successfully", product });
  } catch (error) {
    // Handle error if any
    console.log("Error while creating product error from controller:", error.message);
    return res.status(500).json({ success: false, message: "Error while creating product" });
  };
};


// controller for fetch all product
export const fetchAllProduct = async (req, res) => {
  try {
    let filter = {};
    let sort = {};

    // Handle category filter
    if (req.query.category) {
      filter.category = req.query.category;
    };

    // Handle subcategory filter
    if (req.query.subcategory) {
      filter.subcategory = req.query.subcategory;
    };

    // Handle color filter
    if (req.query.color) {
      filter['items.color'] = { $in: req.query.color };
    };

    // Handle size filter
    if (req.query.size) {
      filter['items.size'] = { $in: req.query.size };
    };

    // Handle search query
    if (req.query.search) {
      filter.name = { $regex: new RegExp(req.query.search, 'i') };
    };

    // Handle sorting
    if (req.query.sort === 'price-high-to-low') {
      sort = { salePrice: -1 }; // Sort by descending price
    } else if (req.query.sort === 'price-low-to-high') {
      sort = { salePrice: 1 }; // Sort by ascending price
    } else if (req.query.sort === 'latest') {
      sort = { createdAt: -1 }; // Sort by latest product
    } else {
      sort = { relevance: -1 }; // Default sorting is relevance
    };

    // Handle pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Query products based on filter criteria, apply sorting, pagination, and populate related fields (category, subcategory, items.color, items.size)
    const product = await Product.find(filter).sort(sort).skip(skip).limit(limit).populate('category').populate('subcategory').populate('items.color').populate('items.size').exec();

    // Get total count of products for pagination
    const totalCount = await Product.countDocuments(filter);

    // Return success response with fetched product
    return res.status(200).json({ success: true, message: "Product fetched successfully", product, totalCount });
  } catch (error) {
    // Handle error if any
    console.log("Error while fetching product error from controller:", error.message);
    return res.status(500).json({ success: false, message: "Error while fetching product" });
  };
};


// Controller to fetch a single product by ID
export const fetchSingleProduct = async (req, res) => {
  try {
    // Get the product ID from the request parameters
    const productId = req.params.id;

    // Find the product by ID and populate related fields (category, items.color, items.size)
    const product = await Product.findById(productId).populate('category').populate('subcategory').populate('items.color').populate('items.size').exec();

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    };

    // Return success response with the fetched product
    return res.status(200).json({ success: true, message: "Single product fetched successfully", product });
  } catch (error) {
    // Handle error if any
    console.error("Error while fetching single product error from controller:", error.message);
    return res.status(500).json({ success: false, message: "Error while fetching single product" });
  };
};


export const updateProduct = async (req, res) => {
  try {
    // Find the product by ID
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    };

    // Prepare the updated data
    const data = {
      name: req.body.name || product.name,
      rating: req.body.rating || product.rating,
      skuCode: req.body.skuCode || product.skuCode,
      mrpPrice: req.body.mrpPrice || product.mrpPrice,
      salePrice: req.body.salePrice || product.salePrice,
      availability: req.body.availability || product.availability,
      status: req.body.status || product.status,
      featuredProduct: req.body.featuredProduct || product.featuredProduct,
      latestProduct: req.body.latestProduct || product.latestProduct,
      bestSellingProduct: req.body.bestSellingProduct || product.bestSellingProduct,
      specialProduct: req.body.specialProduct || product.specialProduct,
      newProduct: req.body.newProduct || product.newProduct,
      smallInfo: req.body.smallInfo || product.smallInfo,
      description: req.body.description || product.description,
    };

    // Update the product with new data
    product = await Product.findByIdAndUpdate(req.params.id, data, { new: true });

    // Return success response with updated product
    return res.status(200).json({ success: true, message: "Product updated successfully", product });
  } catch (error) {
    // Handle error if any
    console.log("Error while updating product error from controller:", error.message);
    return res.status(500).json({ success: false, message: "Error while updating product" });
  };
};


// controller to delete prodcut by ID -- Admin
export const deleteProduct = async (req, res) => {
  try {
    // Get the product ID from the request parameters
    const productId = req.params.id;

    // Find the product by ID
    let product = await Product.findById(productId);

    // Check if the product exists
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    };

    // Delete images from Cloudinary
    const deletePromises = product.items.map((item) => cloudinary.uploader.destroy(item.cloudinary_id));

    // Wait for all delete operations to complete
    await Promise.all(deletePromises);

    // Delete product from the database
    product = await Product.findByIdAndDelete(productId);

    // Return success response
    return res.status(200).json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    // Handle error if any
    console.log("Error while deleting product error from controller:", error.message);
    return res.status(500).json({ success: false, message: "Error while deleting product" });
  };
};