/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";


const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/order/all-order");
        setOrders(response?.data?.order);
      } catch (error) {
        console.log('error while fetching orders:', error.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <>
      <div id="top" className="sa-app__body">
        <div className="mx-sm-2 px-2 px-sm-3 px-xxl-4 pb-6">
          <div className="container">
            <div className="py-5">
              <div className="row g-4 align-items-center">
                <div className="col">
                  <nav className="mb-2" aria-label="breadcrumb">
                    <ol className="breadcrumb breadcrumb-sa-simple">
                      <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Orders</li>
                    </ol>
                  </nav>
                  <h1 className="h3 m-0">Orders</h1>
                </div>
                <div className="col-auto d-flex"><Link to="/order-list" className="btn btn-primary">New order</Link></div>
              </div>
            </div>

            <div className="card">
              <div className="p-4"><input type="text" placeholder="search orders" className="form-control form-control--search mx-auto" id="table-search" /></div>
              <table className="table table-bordered table-striped" data-order="[[ 1, &quot;desc&quot; ]]" data-sa-search-input="#table-search">
                <thead>
                  <tr>
                    <th className="w-min" data-orderable="false"><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block" aria-label="select item" /></th>
                    <th>Number</th>
                    <th>Date</th>
                    <th>Customer</th>
                    <th>Paid</th>
                    <th>Status</th>
                    <th>Items</th>
                    <th>Total</th>
                    <th className="w-min" data-orderable="false"></th>
                  </tr>
                </thead>

                <tbody>
                  {
                    orders.map((order) => {
                      return (
                        <>
                          <tr key={order._id}>
                            <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block" aria-label="select item" /></td>
                            <td><Link to="/order-list" className="text-reset">{order.products[0].product.skuCode}</Link></td>
                            <td>{order.createdAt}</td>
                            <td><Link to="/order-list" className="text-reset">{order.user.name}</Link></td>
                            <td><div className="d-flex fs-6"><div className="badge badge-sa-success">No</div></div></td>
                            <td><div className="d-flex fs-6"><div className="badge badge-sa-danger">{order.status}</div></div></td>
                            <td>{order.products[0].quantity}</td>
                            <td><div className="sa-price"><span className="sa-price__symbol">$</span><span className="sa-price__integer">{order.totalPrice}</span><span className="sa-price__decimal">.00</span></div></td>

                            <td>
                              <div className="dropdown">
                                <button className="btn btn-sa-muted btn-sm" type="button" id="order-context-menu-0" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13" fill="currentColor">
                                    <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                                  </svg>
                                </button>
                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="order-context-menu-0">
                                  <li><Link className="dropdown-item" to="#">Edit</Link></li>
                                  <li><Link className="dropdown-item" to={`/order-detail/${order._id}`}>View</Link></li>
                                  <li><hr className="dropdown-divider" /></li>
                                  <li><Link className="dropdown-item text-danger" to="#">Delete</Link></li>
                                </ul>
                              </div>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      <div className="sa-example__body">
        <nav aria-label="Page navigation example">
          <ul className="pagination pagination-sm mb-0">
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
