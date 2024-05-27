import Order from "../models/order.model.js";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe("sk_test_51PDjRhSJvD4HZxuEJoS86hSwVOFJtiALQJjtmNcdLyrfdM2msiHPDSvFpnlOGWWGDHsfv34TeTwiFiKHy4kw96Kz002ITqOB0S");

export const createOrderWithStripe = async (req, res) => {
  try {
    const { carts, totalPrice, finalPrice, paymentMethod, country, state, city, zipCode, mobile, address } = req.body;

    // Calculate the total price of all products
    const price = carts.reduce((total, cart) => {
      return total + (cart.product.salePrice * cart.quantity);
    }, 0);

    const products = carts.map((cart) => ({
      product: cart.product._id,
      quantity: cart.quantity,
      color: cart.color._id,
      size: cart.size._id,
      productName: cart.product.name,
    }));

    // Calculate the total quantity of all products
    const totalQuantity = products.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
  
    // Calculate the unit amount for all products including the delivery charge of 40 rupees
    const unitAmount = parseInt(((price - (totalPrice - finalPrice) + 40) / totalQuantity) * 100);

    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: product.productName,
        },
        unit_amount: unitAmount,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      success_url: 'https://babymaniaa.onrender.com/success',
      cancel_url: 'https://babymaniaa.onrender.com/cancel',
    });

    const order = new Order({
      user: req.userId,
      products,
      totalPrice,
      finalPrice,
      status: "Pending",
      paid: "Yes",
      paymentMethod,
      country,
      state,
      city,
      zipCode,
      mobile,
      address,
    });
    await order.save();
    return res.status(200).json({ success: true, message: "order created successfully", sessionId: session.id });
  } catch (error) {
    console.log("Error while creating checkout session error from controller:", error.message);
    return res.status(500).json({ success: false, message: 'Failed to create checkout session' });
  };
};
