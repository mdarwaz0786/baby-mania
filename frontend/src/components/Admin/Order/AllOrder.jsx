/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import "./Style.css";
import axios from "axios";
import { useAuth } from "../../../context/authContext.jsx";

const AllOrder = () => {
  const [orders, setOrders] = useState([]);
  const { validToken } = useAuth("");
  var i = 1;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/order/all-order", {
          headers: {
            Authorization: validToken,
          },
        });
        setOrders(response?.data?.order);
      } catch (error) {
        console.log('error while fetching orders:', error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <div className="mt-5 d-flex justify-content-between" style={{ width: "100%" }}>
        <h4>All Order</h4>
        <form className="form-inline" style={{ display: "flex", gap: "1rem" }}>
          <input type="text" className="form-control mr-sm-2" placeholder="Search..." />
          <button type="submit" className="btn btn-primary">Search</button>
        </form>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Id</th>
            <th>Date</th>
            <th>Customer Detail</th>
            <th>Total Price</th>
            <th>Payment Type</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>

          {
            orders.map((order) => {
              return (
                <>
                  <tr>
                    <td>{i++}</td>
                    <td>{order._id}</td>
                    <td>{order.createdAt}</td>
                    <td>
                      {order.user.name}
                    </td>
                    <td>{order.totalPrice}</td>
                    <td>{order.paymentMethod}</td>
                    <td>{order.status}</td>
                    <td>
                      <button className="btn" style={{ marginRight: "1rem", background: "#3737b1", color: "white", borderRadius: "0.8rem" }}>View</button>
                      <button className="btn" style={{ marginRight: "1rem", background: "#d64040", color: "white", borderRadius: "0.8rem" }}>Delete</button>
                    </td>
                  </tr>
                </>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default AllOrder;
