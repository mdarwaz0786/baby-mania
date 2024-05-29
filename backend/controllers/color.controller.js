import Color from "../models/color.model.js";

// controller for create color -- Admin
export const createColor = async (req, res) => {
  try {
    const { name, colorCode, status } = req.body;
    const color = new Color({ name, colorCode, status });
    await color.save();
    return res.status(200).json({ success: true, message: "color created successfully", color });
  } catch (error) {
    console.log("error while creating color:", error.message);
    return res.status(500).json({ success: false, message: "error while creating color" });
  };
};

// controller for fetch all color
export const fetchAllColor = async (req, res) => {
  try {
     let filter = {};
  
    // Handle search query
    if (req.query.search) {
      filter.name = { $regex: new RegExp(req.query.search, 'i') };
    };

    // Handle pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const color = await Color.find(filter).skip(skip).limit(limit).exec();

     // Get total count of colors for pagination
    const totalCount = await Color.countDocuments(filter);

    if (!color) {
      return res.status(404).json({ success: false, message: "color not found" });
    };

    return res.status(200).json({ success: true, messsage: "color fetched successfully", color, totalCount });
  } catch (error) {
    console.log("error while fetching color:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching color" });
  };
};


// controller for fetch single color
export const fetchSingleColor = async (req, res) => {
  try {
    const colorId = req.params.id;
    const color = await Color.findById(colorId);
    if (!color) {
      return res.status(404).json({ success: false, message: "color not found" });
    };
    return res.status(200).json({ success: true, message: "single color fetched successfully", color });
  } catch (error) {
    console.log("error while fetching single color:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching single color" });
  };
};

// controller for update color -- Admin
export const updateColor = async (req, res) => {
  try {
    const colorId = req.params.id;
    const { name, colorCode, status } = req.body;
    const updatedColor = await Color.findByIdAndUpdate(colorId, { name, colorCode, status }, { new: true });
    if (!updatedColor) {
      return res.status(404).json({ success: false, message: "color not found" });
    };
    return res.status(200).json({ success: true, message: "color updated successfully", updatedColor });
  } catch (error) {
    console.log("error while updating color:", error.message);
    return res.status(500).json({ success: false, message: "error while updating color" });
  };
};

// controller for delete color -- Admin
export const deleteColor = async (req, res) => {
  try {
    const colorId = req.params.id;
    const deletedColor = await Color.findByIdAndDelete(colorId);
    if (!deletedColor) {
      return res.status(400).json({ success: false, message: "color not found" });
    };
    return res.status(200).json({ success: true, message: "color deleted successfully", deletedColor });
  } catch (error) {
    console.log("error while deleting color:", error.message);
    return res.status(500).json({ success: false, message: "error while deleting color" });
  };
};
