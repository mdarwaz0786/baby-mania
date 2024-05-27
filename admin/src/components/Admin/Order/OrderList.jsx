import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useEffect } from "react";

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState({});
  const [filterStatus, setFilterStatus] = useState(null);
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const response = await axios.get("/api/v1/order/all-order");
      setOrders(response?.data?.order);
      const initialSelectedStatus = {};
      response?.data?.order?.forEach((order) => {
        initialSelectedStatus[order?._id] = order?.status;
      });
      setSelectedStatus(initialSelectedStatus);
    } catch (error) {
      console.log('error while fetching orders:', error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (orderId) => {
    try {
      await axios.put(`/api/v1/order/update-order/${orderId}`, { status: selectedStatus[orderId] });
      fetchOrders();
      toast.success("order status updated successfully");
    } catch (error) {
      console.log('Error while updating order status:', error.message);
      toast.error("error while updating order status");
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`/api/v1/order/delete-order/${orderId}`);
      fetchOrders();
      toast.success("order deleted successfully");
    } catch (error) {
      console.log('Error while deleting order:', error.message);
      toast.error("error while deleting order");
    }
  };

  const filteredOrders = orders?.filter((order) => {
    if (filterStatus === null) return true; // Show all orders if no filter is applied
    return order?.status === filterStatus;
  });

  return (
    <>
      <div id="top" className="sa-app__body">
        <div className="mx-sm-2 px-2 px-sm-3 px-xxl-4">
          <div className="container">
            <div className="mb-1 mt-1" style={{ display: "flex", justifyContent: "space-between", alignContent: "center", paddingTop: "1rem" }}>
              <h5 className="card-title" style={{ paddingLeft: "1rem" }}>Order List</h5>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
            </div>

            <div className="container">
              <div className="p-4">
                <input type="text" placeholder="search orders" className="form-control form-control--search mx-auto" id="table-search" />
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: "1rem" }}>
                  <button style={{ margin: '0 10px 10px 0' }} className="btn btn-primary" onClick={() => setFilterStatus("Pending")}>Pending</button>
                  <button style={{ margin: '0 10px 10px 0' }} className="btn btn-primary" onClick={() => setFilterStatus("Processing")}>Processing</button>
                  <button style={{ margin: '0 10px 10px 0' }} className="btn btn-primary" onClick={() => setFilterStatus("Shipped")}>Shipped</button>
                  <button style={{ margin: '0 10px 10px 0' }} className="btn btn-primary" onClick={() => setFilterStatus("Delivered")}>Delivered</button>
                  <button style={{ margin: '0 10px 10px 0' }} className="btn btn-primary" onClick={() => setFilterStatus("Cancelled")}>Cancelled</button>
                  <button style={{ margin: '0 10px 10px 0' }} className="btn btn-secondary" onClick={() => setFilterStatus(null)}>Clear Filter</button>
                </div>
              </div>
              <table className="table table-bordered table-striped" data-sa-search-input="#table-search">
                <thead>
                  <tr>
                    <th className="w-min" data-orderable="false"><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block" aria-label="select item" /></th>
                    <th>#</th>
                    <th>SKU Code</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Paid</th>
                    <th>Status</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th className="w-min" data-orderable="false">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    filteredOrders?.map((order, index) => (
                      <tr key={order?._id}>
                        <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block" aria-label="select item" /></td>
                        <td>{index + 1}</td>
                        <td><Link to="/admin/order-list" className="text-reset">{order?.products[0]?.product?.skuCode}</Link></td>
                        <td>{new Date(order?.createdAt).toLocaleString()}</td>
                        <td><Link to={`/admin/order-detail/${order?._id}`} className="text-reset">{order?.user?.name}</Link></td>
                        <td><div className="d-flex fs-6"><div className="badge badge-sa-success">{order?.paid}</div></div></td>
                        <td>
                          <div className="d-flex fs-6">
                            <div className="d-flex align-items-center">
                              <select className="form-select form-select-sm me-2" value={selectedStatus[order?._id] || ''} onChange={(e) => setSelectedStatus({ ...selectedStatus, [order?._id]: e.target.value })}>
                                <option selected>{order?.status}</option>
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                              <button className="btn btn-primary btn-sm" onClick={() => handleStatusUpdate(order?._id)}>Update</button>
                            </div>
                          </div>
                        </td>
                        <td>{order?.products?.reduce((total, product) => total + product?.quantity, 0)}</td>
                        <td><div className="sa-price"><span className="sa-price__symbol">₹</span><span className="sa-price__integer">{order?.finalPrice}</span><span className="sa-price__decimal">.00</span></div></td>

                        <td>
                          <div className="dropdown">
                            <button className="btn btn-sa-muted btn-sm" type="button" id={`order-context-menu-${order?._id}`} data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                              <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13" fill="currentColor">
                                <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                              </svg>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby={`order-context-menu-${order?._id}`}>
                              <li><Link className="dropdown-item" to={`/admin/order-detail/${order?._id}`}>View</Link></li>
                              <li><hr className="dropdown-divider" /></li>
                              <li><Link className="dropdown-item text-danger" to="#" onClick={() => handleDeleteOrder(order?._id)}>Delete</Link></li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="sa-example__body" style={{marginBottom:"4rem"}}>
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm">
            <li className="page-item disabled"><a className="page-link" tabIndex={-1} aria-disabled="true">Previous</a></li>
            <li className="page-item"><a className="page-link" href="#">1</a></li>
            <li className="page-item active" aria-current="page"><a className="page-link" href="#">2</a></li>
            <li className="page-item"><a className="page-link" href="#">3</a></li>
            <li className="page-item"><a className="page-link" href="#">Next</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default OrderList;
