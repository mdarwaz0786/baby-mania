import Newsletter from "../models/newsletter.model.js";

// Controller for creating a newsletter subscription
export const createNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    const newsletter = new Newsletter({ email });
    await newsletter.save();
    return res.status(200).json({ success: true, message: "Newsletter created successfully", newsletter });
  } catch (error) {
    console.log("Error while creating newsletter:", error.message);
    return res.status(500).json({ success: false, message: "Error while creating newsletter" });
  };
};

// Controller for fetching all newsletter
export const fetchAllNewsletter = async (req, res) => {
  try {
    const newsletter = await Newsletter.find();
    if (!newsletter) {
      return res.status(404).json({ success: false, message: "Newsletter not found" });
    };
    return res.status(200).json({ success: true, message: "All newsletter fetched successfully", newsletter });
  } catch (error) {
    console.log("Error while fetching all newsletter:", error.message);
    return res.status(500).json({ success: false, message: "Error while fetching all newsletter" });
  };
};

// Controller for fetching a single newsletter by ID
export const fetchSingleNewsletter = async (req, res) => {
  try {
    const newsletterId = req.params.id;
    const newsletter = await Newsletter.findById(newsletterId);
    if (!newsletter) {
      return res.status(404).json({ success: false, message: "Newsletter not found" });
    };
    return res.status(200).json({ success: true, message: "Single newsletter fetched successfully", newsletter });
  } catch (error) {
    console.log("Error while fetching single newsletter:", error.message);
    return res.status(500).json({ success: false, message: "Error while fetching single newsletter" });
  };
};

// Controller for updating a newsletter by ID
export const updateNewsletter = async (req, res) => {
  try {
    const newsletterId = req.params.id;
    const { email } = req.body;
    const newsletter = await Newsletter.findByIdAndUpdate(newsletterId, { email }, { new: true });
    if (!newsletter) {
      return res.status(404).json({ success: false, message: "Newsletter not found" });
    };
    return res.status(200).json({ success: true, message: "Newsletter updated successfully", newsletter });
  } catch (error) {
    console.log("Error while updating newsletter:", error.message);
    return res.status(500).json({ success: false, message: "Error while updating newsletter" });
  };
};

// Controller for deleting a newsletter by ID
export const deleteNewsletter = async (req, res) => {
  try {
    const newsletterId = req.params.id;
    const newsletter = await Newsletter.findByIdAndDelete(newsletterId);
    if (!newsletter) {
      return res.status(404).json({ success: false, message: "Newsletter not found" });
    };
    return res.status(200).json({ success: true, message: "Newsletter deleted successfully", newsletter });
  } catch (error) {
    console.log("Error while deleting newsletter:", error.message);
    return res.status(500).json({ success: false, message: "Error while deleting newsletter" });
  };
};


