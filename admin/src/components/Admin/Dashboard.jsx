import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [allData, setAllData] = useState();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const response = await axios.get("/api/v1/data/all-data");
        setAllData(response?.data);
      } catch (error) {
        console.log('error while fetching all data:', error.message);
      }
    };
    fetchAllData();
  }, []);

  return (
    <>
      <div id="top" className="sa-app__body px-2 px-lg-4" style={{ marginBottom: "2rem" }}>
        <div className="container pb-6">
          <div className="py-5">
            <div className="row g-4 align-items-center">
              <div className="col">
                <h1 className="h3 m-0">Dashboard</h1>
              </div>
            </div>
          </div>

          <div className="row g-4 g-xl-5">
            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total Products</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-1" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/product-list">Product List</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/admin/add-product">Product Add</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.product}</div>
                  <Link to="/admin/product-list" className="saw-indicator__caption">Go To Product List</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total Categories</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-2" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/category-list">Category List</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/admin/add-category">Category Add</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.category}</div>
                  <Link to="/admin/category-list" className="saw-indicator__caption">Go To Category List</Link>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total Colors</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-2" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/color-list">Color List</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/admin/add-color">Color Add</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.color}</div>
                  <Link to="/admin/color-list" className="saw-indicator__caption">Go To Color List</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total Sizes</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-2" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/size-list">Size List</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="/admin/add-size">Size Add</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.size}</div>
                  <Link to="/admin/size-list" className="saw-indicator__caption">Go To Size List</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total Customers</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-2" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/customer-list">Customer List</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.user}</div>
                  <Link to="/admin/customer-list" className="saw-indicator__caption">Go To Customer List</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total Orders</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-2" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/order-list">Order List</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.order}</div>
                  <Link to="/admin/order-list" className="saw-indicator__caption">Go To Order List</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total Contact Enquiry</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-2" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/enquiry-list">Enquiry List</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.contact}</div>
                  <Link to="/admin/enquiry-list" className="saw-indicator__caption">Go To Contact Enquiry List</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4 d-flex">
              <div className="card saw-indicator flex-grow-1">
                <div className="sa-widget-header saw-indicator__header">
                  <h2 className="sa-widget-header__title">Total News Letter</h2>
                  <div className="sa-widget-header__actions">
                    <div className="dropdown">
                      <button type="button" className="btn btn-sm btn-sa-muted d-block" id="widget-context-menu-2" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                        <svg xmlns="http://www.w3.org/2000/svg" width={3} height={13} fill="currentColor">
                          <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                        </svg>
                      </button>

                      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="widget-context-menu-1">
                        <li><Link className="dropdown-item" to="/admin/newsletter">News Letter List</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="saw-indicator__body">
                  <div className="saw-indicator__value">{allData?.newsletter}</div>
                  <Link to="/admin/newsletter" className="saw-indicator__caption">Go To News Letter List</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
