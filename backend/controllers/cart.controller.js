import Cart from "../models/cart.model.js";

// controller for user create cart -- User
export const createCart = async (req, res) => {
  try {
    const user = req.userId;
    const { product, quantity, color, size } = req.body;
    const cart = new Cart({ user, product, color, size, quantity });
    await cart.save();
    return res.status(200).json({ success: true, message: "cart created successfully", cart })
  } catch (error) {
    console.log("error while creating cart:", error.message);
    return res.status(500).json({ success: false, message: "error while creating cart" });
  };
};

// controller for fetch user cart -- User
export const fetchCart = async (req, res) => {
  try {
    const userId = req.userId;
    const cart = await Cart.find({ 'user': userId }).populate("user").populate("product").populate("color").populate("size");
    if (!cart) {
      return res.status(404).json({ success: false, message: "cart not found" });
    };
    return res.status(200).json({ success: true, message: "user cart fetched successfully", cart })
  } catch (error) {
    console.log("error while fetching user cart", error.message);
    return res.status(500).json({ success: false, message: "error while fetching user cart" });
  };
};

// controller for user update cart -- User
export const updateCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const { quantity } = req.body;
    const updatedCart = await Cart.findByIdAndUpdate(cartId, { quantity }, { new: true });
    if (!updatedCart) {
      return res.status(404).json({ success: false, message: "cart not found" });
    };
    return res.status(200).json({ success: true, message: "cart updated successfully", updatedCart });
  } catch (error) {
    console.log("error while updating cart:", error.message);
    return res.status(500).json({ success: false, message: "error while updating cart" });
  };
};

// controller for user delete cart -- User
export const deleteCart = async (req, res) => {
  try {
    const cartId = req.params.id;
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    if (!deletedCart) {
      return res.status(400).json({ success: false, message: "cart not found" });
    };
    return res.status(200).json({ success: true, message: "cart deleted successfully", deletedCart });
  } catch (error) {
    console.log("error while deleting cart:", error.message);
    return res.status(500).json({ success: false, message: "error while deleting cart" });
  };
};

// controller for user clear cart -- User
export const clearCart = async (req, res) => {
  try {
    const userId = req.params.id;
    const clearedCart = await Cart.deleteMany({ 'user': userId });
    if (clearedCart.deletedCount === 0) {
      return res.status(400).json({ success: false, message: "No cart items found for this user" });
    };
    return res.status(200).json({ success: true, message: "cart cleared successfully", clearedCart });
  } catch (error) {
    console.log("error while clearing cart:", error.message);
    return res.status(500).json({ success: false, message: "error while clearing cart" });
  };
};