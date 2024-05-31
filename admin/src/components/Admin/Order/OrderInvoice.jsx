import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import userIcon from "../../../assets/user.png";
import html2pdf from "html2pdf.js";

const OrderInvoice = () => {
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
  }, [id]);

  const totalQuantity = orders?.products?.reduce((total, item) => {
    return total + item?.quantity;
  }, 0);

  const downloadInvoice = () => {
    const element = document.getElementById("invoice");
    const options = {
      margin: 1,
      filename: `Order_${orders?._id}.pdf`,
      html2canvas: {
        scale: 2,
        useCORS: true,
      },
      jsPDF: {
        orientation: "portrait",
      },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div
      className="container my-4"
      style={{ width: "100%", marginBottom: "4rem" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h4">Order Invoice</h1>
        <div>
          <button className="btn btn-secondary me-2" onClick={downloadInvoice}>
            Download Invoice
          </button>
          <button
            className="btn btn-primary"
            onClick={() => navigate(-1)}
            style={{ marginLeft: "1rem" }}
          >
            Back
          </button>
        </div>
      </div>

      <div id="invoice">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-6 order-md-1">
                <h2 className="h5 mb-1">Order #{orders?._id}</h2>
                <p className="mb-0">
                  {new Date(orders?.createdAt).toLocaleString()}
                </p>
                <p className="mb-0">Total Quantity: {totalQuantity}</p>
                <p className="mb-0">Total Price: ₹{orders?.finalPrice}</p>
                <p className="mb-0">Payment Method: {orders?.paymentMethod}</p>
              </div>
              <div className="col-12 col-md-6 text-end order-md-2 mt-3 mt-md-0">
                <img
                  src={userIcon}
                  alt="User"
                  style={{
                    width: "40px",
                    height: "40px",
                    objectFit: "contain",
                  }}
                />
                <p className="mb-0">Name: {orders?.user?.name}</p>
                <p className="mb-0">Email: {orders?.user?.email}</p>
                <p className="mb-0">Mobile: {orders?.user?.mobile}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h2 className="h5 mb-3">Items</h2>
            <div className="table-responsive">
              <table className="table table-sm">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {orders?.products?.map((product, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={product?.product?.items[0]?.image}
                            alt="Product"
                            style={{
                              width: "40px",
                              height: "40px",
                              marginRight: "10px",
                            }}
                            crossOrigin="anonymous"
                          />
                          <div>
                            <Link to="#" className="text-reset">
                              {product?.product?.name}
                            </Link>
                            <p className="mb-0">
                              Color: {product?.color?.name}
                            </p>
                            <p className="mb-0">Size: {product?.size?.name}</p>
                          </div>
                        </div>
                      </td>
                      <td>₹{product?.product?.salePrice}</td>
                      <td>{product?.quantity}</td>
                      <td>
                        ₹{product?.product?.salePrice * product?.quantity}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3" className="text-end fw-bold">
                      Total
                    </td>
                    <td className="fw-bold">₹{orders?.finalPrice}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row g-0" style={{ marginBottom: "4rem" }}>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="h5 mb-3">Shipping Address</h2>
                <p className="mb-0">Country: {orders?.country}</p>
                <p className="mb-0">State: {orders?.state}</p>
                <p className="mb-0">City: {orders?.city}</p>
                <p className="mb-0">Zip Code: {orders?.zipCode}</p>
                <p className="mb-0">Address: {orders?.address}</p>
                <p className="mb-0">Mobile: {orders?.mobile}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="h5 mb-3">Billing Address</h2>
                <p className="mb-0">Country: {orders?.country}</p>
                <p className="mb-0">State: {orders?.state}</p>
                <p className="mb-0">City: {orders?.city}</p>
                <p className="mb-0">Zip Code: {orders?.zipCode}</p>
                <p className="mb-0">Address: {orders?.address}</p>
                <p className="mb-0">Mobile: {orders?.mobile}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInvoice;
