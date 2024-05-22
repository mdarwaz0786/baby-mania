import Product from "../models/product.model.js";
import Color from "../models/color.model.js";
import Category from "../models/category.model.js";
import Size from "../models/size.model.js";
import User from "../models/user.model.js";
import Order from "../models/order.model.js";
import Contact from "../models/contact.model.js";
import Newsletter from "../models/newsletter.model.js";

// controller to get all data length
export const fetchAllData = async (req, res) => {
  try {
    const product = (await Product.find()).length;
    const color = (await Color.find()).length;
    const category = (await Category.find()).length;
    const size = (await Size.find()).length;
    const user = (await User.find()).length;
    const order = (await Order.find()).length;
    const contact = (await Contact.find()).length;
    const newsletter = (await Newsletter.find()).length;
    return res.status(200).json({ success: true, message: "All data fetched successfully", product, color, category, size, user, order, contact, newsletter });
  } catch (error) {
    console.log("Error while fetching all data:", error.message);
    return res.status(500).json({ success: true, message: "Error while fetching all data" });
  };
};