import Newsletter from "../models/newsletter.model.js";

// Controller for creating a newsletter subscription
export const createNewsletter = async (req, res) => {
  try {
    const { email } = req.body;
    const newsletter = new Newsletter({ email });
    await newsletter.save();
    return res.status(200).json({
      success: true,
      message: "Newsletter created successfully",
      newsletter,
    });
  } catch (error) {
    console.log("Error while creating newsletter:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while creating newsletter" });
  }
};

// Controller for fetching all newsletter
export const fetchAllNewsletter = async (req, res) => {
  try {
    let filter = {};

    // Handle search query
    if (req.query.search) {
      filter.email = { $regex: new RegExp(req.query.search, "i") };
    }

    // Handle pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get total count of users for pagination
    const totalCount = await Newsletter.countDocuments(filter);

    const newsletter = await Newsletter.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    if (!newsletter) {
      return res
        .status(404)
        .json({ success: false, message: "Newsletter not found" });
    }

    return res.status(200).json({
      success: true,
      message: "All newsletter fetched successfully",
      newsletter,
      totalCount,
    });
  } catch (error) {
    console.log("Error while fetching all newsletter:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching all newsletter" });
  }
};

// Controller for fetching a single newsletter by ID
export const fetchSingleNewsletter = async (req, res) => {
  try {
    const newsletterId = req.params.id;
    const newsletter = await Newsletter.findById(newsletterId);
    if (!newsletter) {
      return res
        .status(404)
        .json({ success: false, message: "Newsletter not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Single newsletter fetched successfully",
      newsletter,
    });
  } catch (error) {
    console.log("Error while fetching single newsletter:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error while fetching single newsletter",
    });
  }
};

// Controller for updating a newsletter by ID
export const updateNewsletter = async (req, res) => {
  try {
    const newsletterId = req.params.id;
    const { email } = req.body;
    const newsletter = await Newsletter.findByIdAndUpdate(
      newsletterId,
      { email },
      { new: true }
    );
    if (!newsletter) {
      return res
        .status(404)
        .json({ success: false, message: "Newsletter not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Newsletter updated successfully",
      newsletter,
    });
  } catch (error) {
    console.log("Error while updating newsletter:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while updating newsletter" });
  }
};

// Controller for deleting a newsletter by ID
export const deleteNewsletter = async (req, res) => {
  try {
    const newsletterId = req.params.id;
    const newsletter = await Newsletter.findByIdAndDelete(newsletterId);
    if (!newsletter) {
      return res
        .status(404)
        .json({ success: false, message: "Newsletter not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Newsletter deleted successfully",
      newsletter,
    });
  } catch (error) {
    console.log("Error while deleting newsletter:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while deleting newsletter" });
  }
};
