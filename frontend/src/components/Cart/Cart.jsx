/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [carts, setCarts] = useState([]);
  const [userId, setUserId] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const { validToken } = useAuth("");

  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }, []);

  const fetchCarts = async () => {
    try {
      const response = await axios.get("/api/v1/cart/fetch-user-cart", {
        headers: {
          Authorization: validToken,
        },
      });
      setCarts(response?.data?.cart);
      setUserId(response?.data?.cart[0]?.user?._id);
    } catch (error) {
      console.log('error while fetching carts:', error.message);
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  const deleteCarts = async (cartId) => {
    try {
      await axios.delete(`/api/v1/cart/delete-user-cart/${cartId}`, {
        headers: {
          Authorization: validToken,
        },
      });
      fetchCarts();
    } catch (error) {
      console.log('error while deleting carts:', error.message);
    }
  };

  const clearCarts = async (userId) => {
    try {
      await axios.delete(`/api/v1/cart/clear-user-cart/${userId}`, {
        headers: {
          Authorization: validToken,
        },
      });
      fetchCarts();
    } catch (error) {
      console.log('error while clearing carts:', error.message);
    }
  };

  const updateCartQuantity = async (cartId, newQuantity) => {
    try {
      if (newQuantity < 1) {
        newQuantity = 1;
      }
      await axios.put(`/api/v1/cart/update-user-cart/${cartId}`, { quantity: newQuantity }, {
        headers: {
          Authorization: validToken,
        },
      });
      fetchCarts();
    } catch (error) {
      console.log('error while updating cart quantity:', error.message);
    }
  };

  const totalPrice = carts?.reduce((total, item) => {
    return total + (item?.product?.salePrice * item?.quantity);
  }, 0);


  const createOrder = async () => {
    try {
      const orderData = {
        products: carts?.map((cart) => ({
          product: cart?.product?._id,
          quantity: cart?.quantity,
          color: cart?.color?._id,
          size: cart?.size?._id,
        })),
        totalPrice,
        status: "Pending",
        paymentMethod: paymentMethod,
        country,
        state,
        city,
        zipCode,
        mobile,
        address,
      };

      if (!orderData.products || orderData.products.length === 0) {
        alert("Your cart is empty.");
        return;
      }

      if (!country || !state || !city || !zipCode || !mobile || !address) {
        alert('Please enter all address detail.');
        return;
      }

      const response = await axios.post("/api/v1/order/create-order", orderData, {
        headers: {
          Authorization: validToken,
        },
      });

      if (response.data.success) {
        clearCarts(userId);
        setAddress("");
        setCity("");
        setCountry("");
        setMobile("");
        setZipCode("");
        setState("");
        alert("order successfull");
      }
    } catch (error) {
      console.log('error while creating order:', error.message);
    }
  };


  const checkout = async () => {
    try {
      if (!carts || carts?.length === 0) {
        alert("Your cart is empty.");
        return;
      }

      if (!country || !state || !city || !zipCode || !mobile || !address) {
        alert('Please enter all address detail.');
        return;
      }

      const stripe = await loadStripe("pk_test_51PDjRhSJvD4HZxuEg9QMUB9HRiRBBKZjGTvupLKo3tgSzymkbx1kSQ8UFkFSdgP4vG1AkCzfqArEALFjXSRsohKr00oSCHeZMg");
      const response = await axios.post("/api/v1/order/checkout", { carts, paymentMethod, country, state, city, zipCode, mobile, address }, {
        headers: {
          Authorization: validToken,
        },
      });
      const sessionId = response?.data?.sessionId;
      const result = stripe.redirectToCheckout({ sessionId });
      if (result.error) {
        console.log(result.error);
      }

      if (response.data.success) {
        clearCarts(userId);
        setAddress("");
        setCity("");
        setCountry("");
        setMobile("");
        setZipCode("");
        setState("");
      }
    } catch (error) {
      console.log('Error while creating order:', error.message);
    }
  };

  const handleConfirmOrder = () => {
    if (paymentMethod === "Cash on Delivery") {
      createOrder();
    } else if (paymentMethod === "Online Payment") {
      checkout();
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <main className="main cart">
          <nav className="breadcrumb-nav">
            <div className="container">
              <ul className="breadcrumb shop-breadcrumb bb-no">
                <li className="active"><Link to="/cart">Cart</Link></li>
              </ul>
            </div>
          </nav>

          <div className="page-content">
            <div className="container">
              <div className="row gutter-lg mb-10">
                <div className="col-lg-6 pr-lg-4 mb-6">
                  <table className="shop-table cart-table">
                    <thead>
                      <tr>
                        <th className="product-name"><span>Product</span></th>
                        <th />
                        <th className="product-price"><span style={{ marginRight: "4rem" }}>Price</span></th>
                        <th className="product-quantity"><span style={{ marginRight: "4rem" }}>Quantity</span></th>
                        <th className="product-subtotal"><span style={{ marginRight: "4rem" }}>Subtotal</span></th>
                      </tr>
                    </thead>

                    <tbody>
                      {
                        carts?.map((cart) => {
                          return (
                            <tr key={cart._id}>
                              <td className="product-thumbnail">
                                <div className="p-relative">
                                  <Link to={`/product/single-product/${cart.product._id}`}>
                                    <figure>
                                      <img src={cart?.product?.items[0]?.image} alt="product" width={300} height={338} />
                                    </figure>
                                  </Link>
                                  <button type="submit" className="btn btn-close" onClick={() => deleteCarts(cart?._id)}><i className="fas fa-times" /></button>
                                </div>
                              </td>
                              <td className="product-name">
                                <Link to="product-default.html">
                                  {cart?.product?.name}
                                </Link>
                              </td>
                              <td className="product-price"><span className="amount">₹{cart?.product?.salePrice}</span></td>
                              <td className="product-quantity">
                                <div className="input-group">
                                  <input className="quantity form-control" type="number" value={cart.quantity} readOnly />
                                  <button className="quantity-plus w-icon-plus" onClick={() => updateCartQuantity(cart?._id, cart?.quantity + 1)}></button>
                                  <button className="quantity-minus w-icon-minus" onClick={() => updateCartQuantity(cart?._id, cart?.quantity - 1)}></button>
                                </div>
                              </td>
                              <td className="product-subtotal">
                                <span className="amount">₹{(cart?.product?.salePrice) * (cart?.quantity)}</span>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </tbody>
                  </table>

                  <div className="cart-action mb-6">
                    <Link to="/product" className="btn btn-dark btn-rounded btn-icon-left btn-shopping mr-auto"><i className="w-icon-long-arrow-left" />Continue Shopping</Link>
                    <button type="submit" className="btn btn-rounded btn-default btn-clear" name="clear_cart" value="Clear Cart" style={{ marginRight: "3rem" }} onClick={() => clearCarts(userId)}>Clear Cart</button>
                  </div>


                  <div className="card payment-methods mb-3">
                    <div className="card-body">
                      <h5 className="card-title mb-3">Select Payment Method:</h5>
                      <div className="custom-control custom-radio mb-2">
                        <input
                          type="radio"
                          id="cashOnDelivery"
                          name="paymentMethod"
                          value="Cash on Delivery"
                          className="custom-control-input"
                          checked={paymentMethod === "Cash on Delivery"}
                          onChange={() => setPaymentMethod("Cash on Delivery")}
                        />
                        <label className="custom-control-label" htmlFor="cashOnDelivery">Cash on Delivery</label>
                      </div>

                      <div className="custom-control custom-radio">
                        <input
                          type="radio"
                          id="onlinePayment"
                          name="paymentMethod"
                          value="Online Payment"
                          className="custom-control-input"
                          checked={paymentMethod === "Online Payment"}
                          onChange={() => setPaymentMethod("Online Payment")}
                        />
                        <label className="custom-control-label" htmlFor="onlinePayment">Online Payment</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 sticky-sidebar-wrapper">
                  <div className="sticky-sidebar">
                    <div className="cart-summary mb-4">
                      <h3 className="cart-title text-uppercase">Cart Totals</h3>

                      <div className="cart-subtotal d-flex align-items-center justify-content-between">
                        <label className="ls-25">Subtotal</label>
                        <span>₹{totalPrice}</span>
                      </div>

                      <hr className="divider" />

                      <div className="shipping-calculator">
                        <p className="shipping-destination lh-1"><strong>Shipping Address</strong></p>
                        <form className="shipping-calculator-form">
                          <div className="form-group">
                            <input className="form-control form-control-md" type="text" name="country" value={country} placeholder="Enter Your Country" onChange={(e) => setCountry(e.target.value)} required />
                          </div>
                          <div className="form-group">
                            <input className="form-control form-control-md" type="text" name="state" value={state} placeholder="Enter Your  State" onChange={(e) => setState(e.target.value)} required />
                          </div>
                          <div className="form-group">
                            <input className="form-control form-control-md" type="text" name="city" value={city} placeholder="Enter Your  City" onChange={(e) => setCity(e.target.value)} required />
                          </div>
                          <div className="form-group">
                            <input className="form-control form-control-md" type="text" name="zipCode" value={zipCode} placeholder="Enter Your  ZIP Code" onChange={(e) => setZipCode(e.target.value)} required />
                          </div>
                          <div className="form-group">
                            <input className="form-control form-control-md" type="number" name="mobile" value={mobile} placeholder="Enter Your Mobile Number" onChange={(e) => setMobile(e.target.value)} required />
                          </div>
                          <div className="form-group">
                            <textarea className="form-control form-control-md" type="text" name="address" value={address} placeholder="Enter Your Address" onChange={(e) => setAddress(e.target.value)} required />
                          </div>
                        </form>
                      </div>

                      <hr className="divider mb-6" />

                      <div className="order-total d-flex justify-content-between align-items-center">
                        <label>Total</label>
                        <span className="ls-50">₹{totalPrice}</span>
                      </div>

                      <button className="btn btn-block btn-dark btn-icon-right btn-rounded  btn-checkout" onClick={handleConfirmOrder}>
                        {paymentMethod === "Online Payment" ? "Pay Now" : "Place Order"}  <i className="w-icon-long-arrow-right" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Cart;

