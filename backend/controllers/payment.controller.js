import Order from "../models/order.model.js";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();

const stripe = new Stripe("sk_test_51PDjRhSJvD4HZxuEJoS86hSwVOFJtiALQJjtmNcdLyrfdM2msiHPDSvFpnlOGWWGDHsfv34TeTwiFiKHy4kw96Kz002ITqOB0S");

export const createOrderWithStripe = async (req, res) => {
  try {
    const { carts, paymentMethod, country, state, city, zipCode, mobile, address } = req.body;

    const products = carts.map((cart) => ({
      product: cart.product._id,
      quantity: cart.quantity,
      color: cart.color._id,
      size: cart.size._id,
      productName: cart.product.name,
      totalPrice: cart.product.salePrice,
    }));

    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: product.productName,
        },
        unit_amount: product.totalPrice * 100,
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

    const price = carts.reduce((total, product) => {
      return total + (product.product.salePrice * product.quantity);
    }, 0);

    const order = new Order({
      user: req.userId,
      products,
      totalPrice: price,
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

    return res.status(200).json({ sessionId: session.id });
  } catch (error) {
    console.log("Error while creating checkout session:", error.message);
    return res.status(500).json({ success: false, message: 'Failed to create checkout session' });
  };
};
