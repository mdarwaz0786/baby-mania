import Category from "../models/category.model.js";
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";

// controller to create category
export const createCategory = async (req, res) => {
  try {
    const { path } = req.file;
    const result = await cloudinary.uploader.upload(path);
    const subcategories = req.body.subcategories.map((subcategory) => ({
      name: subcategory.name,
    }));
    const category = new Category(
      {
        name: req.body.name,
        image: result.secure_url,
        cloudinary_id: result.public_id,
        status: req.body.status,
        showHeader: req.body.showHeader,
        shopByCategory: req.body.shopByCategory,
        ourCategory: req.body.ourCategory,
        subcategories: subcategories,
      },
    );
    await category.save();
    fs.unlinkSync(path);
    return res.status(201).json({ success: true, message: "category created successfully", category });
  } catch (error) {
    console.log("error while creating category:", error.message);
    return res.status(500).json({ success: false, message: "error while creating category" });
  };
};

// controller to fetch all category
export const fetchAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    if (!category) {
      return res.status(200).json({ success: false, messsage: "category not found", });
    };
    return res.status(200).json({ success: true, messsage: "category fetched successfully", category });
  } catch (error) {
    console.log("error while fetching category:", error.message);
    return res.status(500).json({ success: false, message: "Error while fetching all category" });
  };
};

// controller to fetch single category
export const fetchSingleCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    return res.status(200).json({ success: true, message: "single category fetched successfully", category });
  } catch (error) {
    console.log("error while fetching single category:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching single category" });
  };
};

// controller to update category
export const updateCategory = async (req, res) => {
  try {
    const { path } = req.file;
    let category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    let result;
    if (req.file) {
      result = await cloudinary.uploader.upload(path);
    };
    const data = {
      name: req.body.name || category.name,
      image: result?.secure_url || category.image,
      cloudinary_id: result?.public_id || category.cloudinary_id,
      status: req.body.status || category.status,
      showHeader: req.body.showHeader || category.showHeader,
      shopByCategory: req.body.shopByCategory || category.shopByCategory,
      ourCategory: req.body.ourCategory || category.ourCategory,
      subcategories: req.body.subcategories || category.subcategories,
    };
    category = await Category.findByIdAndUpdate(req.params.id, data, { new: true });
    if (!category) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    fs.unlinkSync(path);
    return res.status(200).json({ success: true, message: "category updated successfully", category });
  } catch (error) {
    console.log("error while updating category:", error.message);
    return res.status(500).json({ success: false, message: "error while updating category" });
  };
};

// controller to delete category
export const deleteCategory = async (req, res) => {
  try {
    let category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    await cloudinary.uploader.destroy(category.cloudinary_id);
    category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    return res.status(200).json({ success: true, message: "category deleted successfully" });
  } catch (error) {
    console.log("error while deleting category:", error.message);
    return res.status(500).json({ success: false, message: "error while deleting category" });
  };
};




