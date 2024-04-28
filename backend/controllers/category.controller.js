import Category from "../models/category.model.js";

// controller for create category -- Admin
export const createCategory = async (req, res) => {
  try {
    const { name, status, showHeader, shopByCategory, ourCategory } = req.body;
    const imageName = req.file.filename;
    const category = new Category({ name, status, showHeader, shopByCategory, ourCategory, image: imageName });
    await category.save();
    return res.status(200).json({ success: true, message: "category created successfully", category });
  } catch (error) {
    console.log("error while creating category:", error.message);
    return res.status(500).json({ success: false, message: "error while creating category" });
  };
};


// controller for fetch all category -- Admin
export const fetchAllCategory = async (req, res) => {
  try {
    const category = await Category.find();
    if (!category) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    return res.status(200).json({ success: true, messsage: "category fetched successfully", category });
  } catch (error) {
    console.log("error while fetching category:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching category" });
  };
};


// controller for fetch single category
export const fetchSingleCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    return res.status(200).json({ success: true, message: "single category fetched successfully", category });
  } catch (error) {
    console.log("error while fetching single category:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching single category" });
  };
};


// controller for update category -- Admin
export const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, status, showHeader, shopByCategory, ourCategory } = req.body;
    const imageName = req.file.filename;
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, { name, status, showHeader, shopByCategory, ourCategory, image: imageName }, { new: true });
    if (!updatedCategory) {
      return res.status(404).json({ success: false, message: "category not found" });
    };
    return res.status(200).json({ success: true, message: "category updated successfully", updatedCategory });
  } catch (error) {
    console.log("error while updating category:", error.message);
    return res.status(500).json({ success: false, message: "error while updating category" });
  };
};

// controller for delete category -- Admin
export const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(400).json({ success: false, message: "category not found" });
    };
    return res.status(200).json({ success: true, message: "category deleted successfully", deletedCategory });
  } catch (error) {
    console.log("error while deleting category:", error.message);
    return res.status(500).json({ success: false, message: "error while deleting category" });
  };
};

