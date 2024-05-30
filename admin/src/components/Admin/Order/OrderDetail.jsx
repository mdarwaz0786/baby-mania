/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import userIcon from "../../../assets/user.png";

const OrderDetail = () => {
  const { id } = useParams();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`/api/v1/order/single-order/${id}`);
        setOrders(response?.data?.order);
      } catch (error) {
        console.log("error while fetching orders:", error.message);
      }
    };
    fetchOrders();
  }, []);

  const totalQuantity = orders?.products?.reduce((total, item) => {
    return total + item?.quantity;
  }, 0);

  return (
    <>
      <div id="top" className="sa-app__body" style={{ marginBottom: "1rem" }}>
        <div className="mx-sm-2 px-2 px-sm-3 px-xxl-4 pb-6">
          <div className="container container--max--xl">
            <div
              className="mb-1 mt-1"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignContent: "center",
                paddingTop: "1rem",
              }}
            >
              <h5 className="card-title" style={{ paddingLeft: "1rem" }}>
                Order Detail
              </h5>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                back
              </button>
            </div>

            <div className="py-5">
              <div className="row g-4 align-items-center">
                <div className="col">
                  <h1 className="h3 m-0">#{orders?._id}</h1>
                </div>
              </div>
            </div>

            <div className="sa-page-meta mb-5">
              <div className="sa-page-meta__body">
                <div className="sa-page-meta__list">
                  <div className="sa-page-meta__item">
                    {new Date(orders?.createdAt).toLocaleString()}
                  </div>
                  <div className="sa-page-meta__item">{totalQuantity}</div>
                  <div className="sa-page-meta__item">
                    Total ₹{orders?.finalPrice}
                  </div>
                  <div className="sa-page-meta__item d-flex align-items-center fs-6">
                    <span className="badge badge-sa-success me-2">
                      {orders?.paymentMethod}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="sa-entity-layout">
              <div className="sa-entity-layout__body">
                <div className="sa-entity-layout__main">
                  <div className="card mt-5">
                    <div className="card-body px-5 py-4 d-flex align-items-center justify-content-between">
                      <h2 className="mb-0 fs-exact-18 me-4">Items</h2>
                      <div className="text-muted fs-exact-14">
                        <Link to="/admin/order-list">Edit items</Link>
                      </div>
                    </div>

                    <div className="table-responsive">
                      <table className="sa-table">
                        <tbody>
                          {orders?.products?.map((product) => {
                            return (
                              <>
                                <tr>
                                  <td className="min-w-20x">
                                    <div className="d-flex align-items-center">
                                      <img
                                        src={product?.product?.items[0]?.image}
                                        alt="ProductImage"
                                        style={{
                                          width: "5rem",
                                          height: "5rem",
                                          marginRight: "1rem",
                                        }}
                                      />
                                      <Link
                                        to="/admin/order-list"
                                        className="text-reset"
                                      >
                                        {product?.product?.name}
                                      </Link>
                                    </div>
                                    <p
                                      className="text-reset"
                                      style={{
                                        marginTop: "0.5rem",
                                        marginBottom: "0.1rem",
                                      }}
                                    >
                                      Color: {product?.color?.name}
                                    </p>
                                    <p
                                      className="text-reset"
                                      style={{ marginBottom: "0rem" }}
                                    >
                                      Size: {product?.size?.name}
                                    </p>
                                  </td>
                                  <td className="text-end">
                                    <div className="sa-price">
                                      <span className="sa-price__symbol">
                                        ₹
                                      </span>
                                      <span className="sa-price__integer">
                                        {product?.product?.salePrice}
                                      </span>
                                      <span className="sa-price__decimal">
                                        .00
                                      </span>
                                    </div>
                                  </td>
                                  <td className="text-end">
                                    {product?.quantity}
                                  </td>
                                  <td className="text-end">
                                    <div className="sa-price">
                                      <span className="sa-price__symbol">
                                        ₹
                                      </span>
                                      <span className="sa-price__integer">
                                        {product?.product?.salePrice *
                                          product?.quantity}
                                      </span>
                                      <span className="sa-price__decimal">
                                        .00
                                      </span>
                                    </div>
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        </tbody>

                        <tbody>
                          <tr>
                            <td colSpan={3}>Total</td>
                            <td className="text-end">
                              <div className="sa-price">
                                <span className="sa-price__symbol">₹</span>
                                <span className="sa-price__integer">
                                  {orders?.finalPrice}
                                </span>
                                <span className="sa-price__decimal">.00</span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="card mt-5">
                    <div className="card-body px-5 py-4 d-flex align-items-center justify-content-between">
                      <h2 className="mb-0 fs-exact-18 me-4">Balance</h2>
                    </div>
                    <table className="sa-table">
                      <tbody className="sa-table__group">
                        <tr>
                          <td>Order Total</td>
                          <td className="text-end">
                            <div className="sa-price">
                              <span className="sa-price__symbol">₹</span>
                              <span className="sa-price__integer">
                                {orders?.finalPrice}
                              </span>
                              <span className="sa-price__decimal">.00</span>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="sa-entity-layout__sidebar">
                  <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-between pb-0 pt-4">
                      <h2 className="fs-exact-16 mb-0">Customer</h2>
                      <Link to="/admin/order-list" className="fs-exact-14">
                        Edit
                      </Link>
                    </div>
                    <div className="card-body d-flex align-items-center pt-4">
                      <div className="sa-symbol sa-symbol--shape--circle sa-symbol--size--lg">
                        <img src={userIcon} width={40} height={40} alt />
                      </div>
                      <div className="ms-3 ps-2">
                        <div className="fs-exact-14 fw-medium">
                          {orders?.user?.name}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card mt-5">
                    <div className="card-body d-flex align-items-center justify-content-between pb-0 pt-4">
                      <h2 className="fs-exact-16 mb-0">Contact person</h2>
                      <Link to="/admin/order-list" className="fs-exact-14">
                        Edit
                      </Link>
                    </div>
                    <div className="card-body pt-4 fs-exact-14">
                      <div>{orders?.user?.name}</div>
                      <div className="mt-1">
                        <Link to="/admin/order-list">
                          {orders?.user?.email}
                        </Link>
                      </div>
                      <div className="text-muted mt-1">
                        {orders?.user?.mobile}
                      </div>
                    </div>
                  </div>

                  <div className="card mt-5">
                    <div className="card-body d-flex align-items-center justify-content-between pb-0 pt-4">
                      <h2 className="fs-exact-16 mb-0">Shipping Address</h2>
                      <Link to="/admin/order-list" className="fs-exact-14">
                        Edit
                      </Link>
                    </div>
                    <div className="card-body pt-4 fs-exact-14">
                      Country: {orders?.country}
                      <br />
                      State: {orders?.state}
                      <br />
                      City: {orders?.city}
                      <br />
                      Zip Code: {orders?.zipCode} <br />
                      Mobile: {orders?.mobile} <br />
                      Address: {orders?.address} <br />
                    </div>
                  </div>

                  <div className="card mt-5">
                    <div className="card-body d-flex align-items-center justify-content-between pb-0 pt-4">
                      <h2 className="fs-exact-16 mb-0">Billing Address</h2>
                      <Link to="/admin/order-list" className="fs-exact-14">
                        Edit
                      </Link>
                    </div>
                    <div className="card-body pt-4 fs-exact-14">
                      Country: {orders?.country}
                      <br />
                      State: {orders?.state}
                      <br />
                      City: {orders?.city}
                      <br />
                      Zip Code: {orders?.zipCode} <br />
                      Mobile: {orders?.mobile} <br />
                      Address: {orders?.address} <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
