import Coupon from "../models/coupon.model.js";

// Controller for creating a coupon
export const createCoupon = async (req, res) => {
  try {
    const { couponCode, type, amount, status } = req.body;
    const coupon = new Coupon({ couponCode, type, amount, status });
    await coupon.save();
    return res
      .status(200)
      .json({ success: true, message: "Coupon created successfully", coupon });
  } catch (error) {
    console.log("Error while creating coupon:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while creating coupon" });
  }
};

// Controller for fetching all coupon
export const fetchAllCoupon = async (req, res) => {
  try {
    let filter = {};

    // Handle search query
    if (req.query.search) {
      filter.couponCode = { $regex: new RegExp(req.query.search, "i") };
    }

    // Handle pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Get total count of users for pagination
    const totalCount = await Coupon.countDocuments(filter);

    const coupon = await Coupon.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .exec();

    if (!coupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    }

    return res.status(200).json({
      success: true,
      message: "Coupons fetched successfully",
      coupon,
      totalCount,
    });
  } catch (error) {
    console.log("Error while fetching coupon:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching coupon" });
  }
};

// Controller for fetching a single coupon
export const fetchSingleCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    const coupon = await Coupon.findById(couponId);
    if (!coupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Coupon fetched successfully", coupon });
  } catch (error) {
    console.log("Error while fetching single coupon:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching single coupon" });
  }
};

// Controller for updating a coupon
export const updateCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    const { couponCode, type, amount, status } = req.body;
    const coupon = await Coupon.findByIdAndUpdate(
      couponId,
      { couponCode, type, amount, status },
      { new: true }
    );
    if (!coupon) {
      return res
        .status(404)
        .json({ success: false, message: "Coupon not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Coupon updated successfully", coupon });
  } catch (error) {
    console.log("Error while updating coupon:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while updating coupon" });
  }
};

// Controller for deleting a coupon
export const deleteCoupon = async (req, res) => {
  try {
    const couponId = req.params.id;
    const coupon = await Coupon.findByIdAndDelete(couponId);
    if (!coupon) {
      return res
        .status(400)
        .json({ success: false, message: "Coupon not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Coupon deleted successfully", coupon });
  } catch (error) {
    console.log("Error while deleting coupon:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while deleting coupon" });
  }
};
