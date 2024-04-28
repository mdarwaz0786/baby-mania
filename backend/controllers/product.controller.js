import Product from "../models/product.model.js";
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";


// controller to create product -- Admin
export const createProduct = async (req, res) => {
  try {
    const { category, name, rating, skuCode, mrpPrice, salePrice, availability, status, featuredProduct, latestProduct, bestSellingProduct, specialProduct, newProduct, smallInfo, description, colors, sizes } = req.body;
    const image = req.files;
    const productImages = [];
    for (const image of images) {
      const result = await cloudinary.uploader.upload(image.path);
      productImages.push({
        url: result.secure_url,
        cloudinary_id: result.public_id,
      });
    };
    const product = new Product({
      category,
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
      colors,
      sizes,
      items: [{
        images: productImages,
      }],
    });
    await product.save();
    images.forEach((image) => {
      fs.unlinkSync(image.path);
    });
    return res.status(201).json({ success: true, message: "product created successfully", product });
  } catch (error) {
    console.log("error while creating product:", error.message);
    return res.status(500).json({ success: false, message: "error while creating product" });
  };
};

// controller for fetch all product -- Admin
export const fetchAllProduct = async (req, res) => {
  try {
    const product = await Product.find().populate("category").populate("color").populate("size");
    if (!product) {
      return res.status(404).json({ success: false, message: "product not found" });
    };
    return res.status(200).json({ success: true, messsage: "product fetched successfully", product });
  } catch (error) {
    console.log("error while fetching product:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching procuct" });
  };
};


// controller for fetch single product
export const fetchSingleProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId).populate("category").populate("color").populate("size");
    if (!product) {
      return res.status(404).json({ success: false, message: "product not found" });
    };
    return res.status(200).json({ success: true, message: "single product fetched successfully", product });
  } catch (error) {
    console.log("error while fetching single product:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching single product" });
  };
};

// controller for update product -- Admin
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { category, name, rating, skuCode, mrpPrice, salePrice, availability, status, featuredProduct, latestProduct, bestSellingProduct, specialProduct, newProduct, smallInfo, description, color, size } = req.body;

    const hasImage = req.files.image && req.files.image.length > 0;
    const image = hasImage ? req.files.image[0].filename : undefined;

    const hasThumbImage1 = req.files.thumbImage1 && req.files.thumbImage1.length > 0;
    const thumbImage1 = hasThumbImage1 ? req.files.thumbImage1[0].filename : undefined;

    const hasThumbImage2 = req.files.thumbImage2 && req.files.thumbImage2.length > 0;
    const thumbImage2 = hasThumbImage2 ? req.files.thumbImage2[0].filename : undefined;

    const updatedProduct = await Product.findByIdAndUpdate(productId, { category, name, rating, skuCode, mrpPrice, salePrice, availability, status, featuredProduct, latestProduct, bestSellingProduct, specialProduct, newProduct, smallInfo, description, color, size, image, thumbImage1, thumbImage2 }, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "product not found" });
    };
    return res.status(200).json({ success: true, message: "product updated successfully", updatedProduct });
  } catch (error) {
    console.log("error while updating product:", error.message);
    return res.status(500).json({ success: false, message: "error while updating product" });
  };
};

// controller for delete prodcut  -- Admin
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(400).json({ success: false, message: "product not found" });
    };
    return res.status(200).json({ success: true, message: "product deleted successfully", deletedProduct });
  } catch (error) {
    console.log("error while deleting product:", error.message);
    return res.status(500).json({ success: false, message: "error while deleting product" });
  };
};