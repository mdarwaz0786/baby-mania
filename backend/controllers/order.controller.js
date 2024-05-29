import Order from "../models/order.model.js";

// controller for creating an order
export const createOrder = async (req, res) => {
  try {
    const user = req.userId;
    const {
      products,
      totalPrice,
      finalPrice,
      status,
      paymentMethod,
      country,
      state,
      city,
      zipCode,
      mobile,
      address,
    } = req.body;
    const order = new Order({
      user,
      products,
      totalPrice,
      finalPrice,
      status,
      paid: "No",
      paymentMethod,
      country,
      state,
      city,
      zipCode,
      mobile,
      address,
    });
    await order.save();
    return res
      .status(201)
      .json({ success: true, message: "order created successfully", order });
  } catch (error) {
    console.log("error while creating order:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "error while creating order" });
  }
};

// controller for fetching all orders
export const fetchAllOrder = async (req, res) => {
  try {
    let filter = {};

    // Handle search query for a specific date
    if (req.query.date) {
      const date = new Date(req.query.date);
      const startOfDay = new Date(date.setHours(0, 0, 0, 0));
      const endOfDay = new Date(date.setHours(23, 59, 59, 999));
      filter.createdAt = { $gte: startOfDay, $lte: endOfDay };
    }

    // Handle pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const order = await Order.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .populate("user")
      .populate("products.product")
      .populate("products.color")
      .populate("products.size")
      .exec();

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "order not found" });
    }

    // Get total count of orders for pagination
    const totalCount = await Order.countDocuments(filter);

    return res.status(200).json({
      success: true,
      message: "order fetched successfully",
      order,
      totalCount,
    });
  } catch (error) {
    console.log("error while fetching order:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "error while fetching order" });
  }
};

// controller for fetching a single order by ID
export const fetchOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId)
      .populate("user")
      .populate("products.product")
      .populate("products.color")
      .populate("products.size");
    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Order fetched successfully", order });
  } catch (error) {
    console.log("Error while fetching order:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching order" });
  }
};

// controller for updating an order by ID
export const updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const updateData = req.body;
    const updatedOrder = await Order.findByIdAndUpdate(orderId, updateData, {
      new: true,
    });
    if (!updatedOrder) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Order updated successfully",
        updatedOrder,
      });
  } catch (error) {
    console.log("Error while updating order:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while updating order" });
  }
};

// controller for deleting an order by ID
export const deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (!deletedOrder) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found" });
    }
    return res
      .status(200)
      .json({
        success: true,
        message: "Order deleted successfully",
        deletedOrder,
      });
  } catch (error) {
    console.log("Error while deleting order:", error.message);
    return res
      .status(500)
      .json({ success: false, message: "Error while deleting order" });
  }
};
