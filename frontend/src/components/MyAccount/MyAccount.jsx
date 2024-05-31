import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyAccount = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  var i = 1;

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/v1/order/all-order");
      setOrders(response?.data?.order);
    } catch (error) {
      console.log("error while fetching orders:", error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
    const scrollOptions = {
      top: 0,
      behavior: "smooth",
    };
    window.scrollTo(scrollOptions);
  }, []);

  const handleStatusUpdate = async (orderId) => {
    try {
      await axios.put(`/api/v1/order/update-order/${orderId}`, {
        status: selectedStatus[orderId],
      });
      fetchOrders();
      toast.success("order status updated successfully");
    } catch (error) {
      console.log("Error while updating order status:", error.message);
      toast.error("error while updating order status");
    }
  };

  return (
    <>
      <main className="main">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">My Account</h1>
          </div>
        </div>

        <nav className="breadcrumb-nav">
          <div className="container">
            <ul className="breadcrumb">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>My account</li>
            </ul>
          </div>
        </nav>

        <div className="page-content pt-2">
          <div className="container">
            <div className="tab tab-vertical row gutter-lg">
              <ul className="nav nav-tabs mb-10" role="tablist">
                <li className="nav-item">
                  <a
                    href="#account-dashboard"
                    className="nav-link active"
                    style={{ border: "none" }}
                  >
                    Dashboard
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="#account-orders"
                    className="nav-link"
                    style={{ border: "none" }}
                  >
                    Orders
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="#account-downloads"
                    className="nav-link"
                    style={{ border: "none" }}
                  >
                    Downloads
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="#account-addresses"
                    className="nav-link"
                    style={{ border: "none" }}
                  >
                    Addresses
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    href="#account-details"
                    className="nav-link"
                    style={{ border: "none" }}
                  >
                    Account details
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    to="/wishlist"
                    className="nav-link"
                    style={{ border: "none" }}
                  >
                    Wishlist
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/logout"
                    className="nav-link"
                    style={{ border: "none" }}
                  >
                    Logout
                  </Link>
                </li>
              </ul>

              <div className="tab-content mb-6">
                <div className="tab-pane active in" id="account-dashboard">
                  <p className="greeting">
                    Hello
                    <span className="text-dark font-weight-bold">
                      {" "}
                      {user?.name},
                    </span>
                  </p>

                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                      <a href="#account-orders" className="link-to-tab">
                        <div className="icon-box text-center">
                          <span className="icon-box-icon icon-orders">
                            <i className="w-icon-orders" />
                          </span>
                          <div className="icon-box-content">
                            <p className="text-uppercase mb-0">Orders</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                      <a href="#account-downloads" className="link-to-tab">
                        <div className="icon-box text-center">
                          <span className="icon-box-icon icon-download">
                            <i className="w-icon-download" />
                          </span>
                          <div className="icon-box-content">
                            <p className="text-uppercase mb-0">Downloads</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                      <a href="#account-addresses" className="link-to-tab">
                        <div className="icon-box text-center">
                          <span className="icon-box-icon icon-address">
                            <i className="w-icon-map-marker" />
                          </span>
                          <div className="icon-box-content">
                            <p className="text-uppercase mb-0">Addresses</p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                      <a href="#account-details" className="link-to-tab">
                        <div className="icon-box text-center">
                          <span className="icon-box-icon icon-account">
                            <i className="w-icon-user" />
                          </span>
                          <div className="icon-box-content">
                            <p className="text-uppercase mb-0">
                              Account Details
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                      <Link to="/wishlist" className="link-to-tab">
                        <div className="icon-box text-center">
                          <span className="icon-box-icon icon-wishlist">
                            <i className="w-icon-heart" />
                          </span>
                          <div className="icon-box-content">
                            <p className="text-uppercase mb-0">Wishlist</p>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-4 col-xs-6 mb-4">
                      <Link to="/logout">
                        <div className="icon-box text-center">
                          <span className="icon-box-icon icon-logout">
                            <i className="w-icon-logout" />
                          </span>
                          <div className="icon-box-content">
                            <p className="text-uppercase mb-0">Logout</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="tab-pane mb-4" id="account-orders">
                  <div className="icon-box icon-box-side icon-box-light">
                    <span className="icon-box-icon icon-orders">
                      <i className="w-icon-orders" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title text-capitalize ls-normal mb-0">
                        Orders
                      </h4>
                    </div>
                  </div>

                  <table className="shop-table account-orders-table mb-6">
                    <thead>
                      <tr>
                        <th style={{ padding: "2rem" }}>#</th>
                        <th className="order-id">Product</th>
                        <th className="order-date">Date</th>
                        <th className="order-status">Status</th>
                        <th className="order-total">Total</th>
                        <th className="order-action">View</th>
                        <th className="order-action">Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {orders
                        ?.filter((order) => order?.user?._id === user?._id)
                        ?.map((order) => (
                          <tr key={order?._id}>
                            <td style={{ padding: "2rem" }}>{i++}</td>
                            <td className="order-id">
                              {(() => {
                                const firstProduct = order?.products?.[0];
                                const firstImageUrl =
                                  firstProduct?.product?.items?.[0]?.image;
                                return firstImageUrl ? (
                                  <img
                                    style={{
                                      width: "5rem",
                                      height: "5rem",
                                      objectFit: "contain",
                                    }}
                                    src={firstImageUrl}
                                    alt="product-image"
                                  />
                                ) : null;
                              })()}
                            </td>

                            <td className="order-date">
                              {new Date(order?.createdAt).toLocaleString()}
                            </td>

                            <td className="order-status">{order?.status}</td>

                            <td className="order-total">
                              <span className="order-price">
                                ₹{order?.finalPrice}
                              </span>{" "}
                              for{" "}
                              <span className="order-quantity">
                                {order?.products?.reduce(
                                  (total, product) => total + product?.quantity,
                                  0
                                )}
                              </span>{" "}
                              item
                            </td>

                            <td className="order-action">
                              <Link
                                to={`/order-invoice/${order?._id}`}
                                className="btn btn-outline-secondary btn-block btn-sm rounded mb-2"
                              >
                                View
                              </Link>
                            </td>

                            <td>
                              <div className="d-flex justify-content-between">
                                <select
                                  style={{
                                    width: "11rem",
                                    fontSize: "1.5rem",
                                  }}
                                  className="form-select"
                                  value={selectedStatus[order?._id] || ""}
                                  onChange={(e) =>
                                    setSelectedStatus({
                                      ...selectedStatus,
                                      [order?._id]: e.target.value,
                                    })
                                  }
                                >
                                  <option selected>{order?.status}</option>
                                  {order?.status === "Delivered" ||
                                  order?.status === "Cancelled" ? (
                                    <option disabled>{order?.status}</option>
                                  ) : (
                                    <option value="Cancelled">Cancelled</option>
                                  )}
                                </select>
                                <button
                                  style={{
                                    marginLeft: "0.8rem",
                                    marginRight: "0.8rem",
                                  }}
                                  className="btn btn-primary btn-sm"
                                  onClick={() => handleStatusUpdate(order?._id)}
                                >
                                  Cancel
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                  <Link
                    to="/product"
                    className="btn btn-dark btn-rounded btn-icon-right"
                  >
                    Go Shop
                    <i className="w-icon-long-arrow-right" />
                  </Link>
                </div>

                <div className="tab-pane" id="account-downloads">
                  <div className="icon-box icon-box-side icon-box-light">
                    <span className="icon-box-icon icon-downloads mr-2">
                      <i className="w-icon-download" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title ls-normal">Downloads</h4>
                    </div>
                  </div>
                  <p className="mb-4">No downloads available yet.</p>
                  <Link
                    to="/product"
                    className="btn btn-dark btn-rounded btn-icon-right"
                  >
                    Go Shop
                    <i className="w-icon-long-arrow-right" />
                  </Link>
                </div>

                <div className="tab-pane" id="account-addresses">
                  <div className="icon-box icon-box-side icon-box-light">
                    <span className="icon-box-icon icon-map-marker">
                      <i className="w-icon-map-marker" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title mb-0 ls-normal">Address</h4>
                    </div>
                  </div>
                  <p>
                    The following address will be used on the checkout page by
                    default.
                  </p>

                  <div className="row">
                    <div className="col-sm-6 mb-6">
                      <div className="ecommerce-address billing-address pr-lg-8">
                        <h4 className="title title-underline ls-25 font-weight-bold">
                          Shipping Address
                        </h4>
                        <address className="mb-4">
                          <table className="address-table">
                            <tbody>
                              <tr>
                                <th>Name:</th>
                                <td>{user?.name}</td>
                              </tr>
                              <tr>
                                <th>Mobile:</th>
                                <td>{user?.mobile}</td>
                              </tr>
                              <tr>
                                <th>Email:</th>
                                <td>{user?.email}</td>
                              </tr>
                            </tbody>
                          </table>
                        </address>
                        <Link
                          to="#"
                          className="btn btn-link btn-underline btn-icon-right text-primary"
                        >
                          Edit your shipping address
                          <i className="w-icon-long-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane" id="account-details">
                  <div className="icon-box icon-box-side icon-box-light">
                    <span className="icon-box-icon icon-account mr-2">
                      <i className="w-icon-user" />
                    </span>
                    <div className="icon-box-content">
                      <h4 className="icon-box-title mb-0 ls-normal">
                        Account Details
                      </h4>
                    </div>
                  </div>
                  <form
                    className="form account-details-form"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="name">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={user?.name}
                            className="form-control form-control-md"
                            readOnly
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email"
                            value={user?.email}
                            className="form-control form-control-md"
                            readOnly
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="mobile">Mobile *</label>
                          <input
                            type="number"
                            id="mobile"
                            name="mobile"
                            placeholder="mobile"
                            value={user?.mobile}
                            className="form-control form-control-md"
                            readOnly
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="password">Password *</label>
                          <input
                            type="text"
                            id="password"
                            name="password"
                            placeholder="password"
                            value={user?.password}
                            className="form-control form-control-md"
                            readOnly
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyAccount;
