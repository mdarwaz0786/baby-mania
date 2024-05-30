import Slider from "../models/slider.model.js";
import fs from "fs";
import cloudinary from "../utils/cloudinary.js";

// controller to create product
export const createSlider = async (req, res) => {
  try {
    const { path } = req.file;
    const result = await cloudinary.uploader.upload(path);
    const slider = new Slider({
      image: result.secure_url,
      cloudinary_id: result.public_id,
      status: req.body.status,
    });
    await slider.save();
    fs.unlinkSync(path);
    return res.status(201).json({
      success: true,
      message: "slider created successfully",
      slider,
    });
  } catch (error) {
    console.log("error while creating slider:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "error while creating slider" });
  }
};

// controller to fetch all product
export const fetchAllSlider = async (req, res) => {
  try {
    let filter = {};

    // Handle search query
    if (req.query.search) {
      filter.name = { $regex: new RegExp(req.query.search, "i") };
    }

    // Handle pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get total count of users for pagination
    const totalCount = await Slider.countDocuments(filter);

    const slider = await Slider.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    if (!slider) {
      return res
        .status(200)
        .json({ success: false, messsage: "slider not found" });
    }

    return res.status(200).json({
      success: true,
      messsage: "All slider fetched successfully",
      slider,
      totalCount,
    });
  } catch (error) {
    console.log("error while fetching all slider:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching all slider" });
  }
};

// controller to update slider
export const updateSlider = async (req, res) => {
  try {
    let slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res
        .status(404)
        .json({ success: false, message: "slider not found" });
    }
    const data = {
      status: req.body.status || slider.status,
    };
    slider = await Slider.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    return res.status(200).json({
      success: true,
      message: "slider updated successfully",
      slider,
    });
  } catch (error) {
    console.log("error while updating slider:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "error while updating slider" });
  }
};

// controller to delete slider
export const deleteSlider = async (req, res) => {
  try {
    let slider = await Slider.findById(req.params.id);
    if (!slider) {
      return res
        .status(404)
        .json({ success: false, message: "slider not found" });
    }
    await cloudinary.uploader.destroy(slider.cloudinary_id);
    slider = await Slider.findByIdAndDelete(req.params.id);
    if (!slider) {
      return res
        .status(404)
        .json({ success: false, message: "slider not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "slider deleted successfully", slider });
  } catch (error) {
    console.log("error while deleting slider:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "error while deleting slider" });
  }
};
