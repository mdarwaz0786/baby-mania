import Size from "../models/size.model.js";

// controller for create size -- Admin
export const createSize = async (req, res) => {
  try {
    const { name, status } = req.body;
    const size = new Size({ name, status });
    await size.save();
    return res.status(200).json({ success: true, message: "size created successfully", size });
  } catch (error) {
    console.log("error while creating size:", error.message);
    return res.status(500).json({ success: false, message: "error while creating size" });
  };
};

// controller for fetch all size
export const fetchAllSize = async (req, res) => {
  try {
    const size = await Size.find();
    if (!size) {
      return res.status(404).json({ success: false, message: "size not found" });
    };
    return res.status(200).json({ success: true, messsage: "size fetched successfully", size });
  } catch (error) {
    console.log("error while fetching size:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching size" });
  };
};


// controller for fetch single size
export const fetchSingleSize = async (req, res) => {
  try {
    const sizeId = req.params.id;
    const size = await Size.findById(sizeId);
    if (!size) {
      return res.status(404).json({ success: false, message: "size not found" });
    };
    return res.status(200).json({ success: true, message: "single size fetched successfully", size });
  } catch (error) {
    console.log("error while fetching single size:", error.message);
    return res.status(500).json({ success: false, message: "error while fetching single size" });
  };
};

// controller for update size -- Admin
export const updateSize = async (req, res) => {
  try {
    const sizeId = req.params.id;
    const { name, status } = req.body;
    const updatedSize = await Size.findByIdAndUpdate(sizeId, { name, status }, { new: true });
    if (!updatedSize) {
      return res.status(404).json({ success: false, message: "size not found" });
    };
    return res.status(200).json({ success: true, message: "size updated successfully", updatedSize });
  } catch (error) {
    console.log("error while updating size:", error.message);
    return res.status(500).json({ success: false, message: "error while updating size" });
  };
};

// controller for delete size -- Admin
export const deleteSize = async (req, res) => {
  try {
    const sizeId = req.params.id;
    const deletedSize = await Size.findByIdAndDelete(sizeId);
    if (!deletedSize) {
      return res.status(400).json({ success: false, message: "size not found" });
    };
    return res.status(200).json({ success: true, message: "size deleted successfully", deletedSize });
  } catch (error) {
    console.log("error while deleting size:", error.message);
    return res.status(500).json({ success: false, message: "error while deleting size" });
  };
};