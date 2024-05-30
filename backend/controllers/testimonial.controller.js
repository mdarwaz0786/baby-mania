import Testimonial from "../models/testimonial.model.js";

// Controller for creating a testimonial
export const createTestimonial = async (req, res) => {
  try {
    const { name, review, status } = req.body;
    const testimonial = new Testimonial({ name, review, status });
    await testimonial.save();
    return res.status(200).json({
      success: true,
      message: "Testimonial created successfully",
      testimonial,
    });
  } catch (error) {
    console.log("Error while creating testimonial:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while creating testimonial" });
  }
};

// Controller for fetching all testimonial
export const fetchAllTestimonial = async (req, res) => {
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
    const totalCount = await Testimonial.countDocuments(filter);

    const testimonial = await Testimonial.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    if (!testimonial) {
      return res
        .status(404)
        .json({ success: false, message: "Testimonial not found" });
    }

    return res.status(200).json({
      success: true,
      message: "All testimonial fetched successfully",
      testimonial,
      totalCount,
    });
  } catch (error) {
    console.log("Error while fetching all testimonial:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error while fetching all testimonial",
    });
  }
};

// Controller for fetching a single testimonial
export const fetchSingleTestimonial = async (req, res) => {
  try {
    const testimonialId = req.params.id;
    const testimonial = await Testimonial.findById(testimonialId);
    if (!testimonial) {
      return res
        .status(404)
        .json({ success: false, message: "Testimonial not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Single testimonial fetched successfully",
      testimonial,
    });
  } catch (error) {
    console.log("Error while fetching single testimonial:", error.message);
    return res.status(500).json({
      success: false,
      message: "Error while fetching single testimonial",
    });
  }
};

// Controller for updating a testimonial
export const updateTestimonial = async (req, res) => {
  try {
    const testimonialId = req.params.id;
    const { name, review, status } = req.body;
    const testimonial = await Testimonial.findByIdAndUpdate(
      testimonialId,
      { name, review, status },
      { new: true }
    );
    if (!testimonial) {
      return res
        .status(404)
        .json({ success: false, message: "Testimonial not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      testimonial,
    });
  } catch (error) {
    console.log("Error while updating testimonial:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while updating testimonial" });
  }
};

// Controller for deleting a testimonial
export const deleteTestimonial = async (req, res) => {
  try {
    const testimonialId = req.params.id;
    const testimonial = await Testimonial.findByIdAndDelete(testimonialId);
    if (!testimonial) {
      return res
        .status(400)
        .json({ success: false, message: "Testimonial not found" });
    }
    return res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
      testimonial,
    });
  } catch (error) {
    console.log("Error while deleting testimonial:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while deleting testimonial" });
  }
};
