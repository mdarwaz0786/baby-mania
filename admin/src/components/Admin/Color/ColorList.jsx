/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import CheckBox from "./Checkbox";
import { toast } from 'react-toastify';

const SizeList = () => {
  const [colors, setColors] = useState([]);
  const navigate = useNavigate();
  const [totalColor, setTotalColor] = useState();
  const [filters, setFilters] = useState({
    search: "",
    page: 1,
    limit: 3,
  });

  const handleSearchChange = (e) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: e.target.value}));
  };

  const fetchColors = async () => {
    try {
      const response = await axios.get("/api/v1/color/all-color", {
        params: filters,
      });
      setColors(response?.data?.color);
      setTotalColor(response?.data?.totalCount);
    } catch (error) {
      console.log('error while fetching colors:', error.message);
    }
  };

   const handlePageChange = (newPage) => {
    if (newPage < 1 || (newPage > filters.page && colors?.length === 0)) {
      return;
    }
    setFilters((prevFilters) => ({ ...prevFilters, page: newPage }));
  };

  useEffect(() => {
    fetchColors();
  }, [filters]);

  const deleteColor = async (id) => {
    try {
      await axios.delete(`/api/v1/color/delete-color/${id}`);
      toast.success("color deleted successfully");
      fetchColors();
    } catch (error) {
      console.log('error while deleting color:', error.message);
      toast.error("error while deleting color");
    }
  };

  const updateStatus = async (id, showStatus) => {
    try {
      await axios.put(`/api/v1/color/update-color/${id}`, { status: showStatus });
      fetchColors();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div id="top" className="sa-app__body">
        <div className="mx-sm-2 px-2 px-sm-3 px-xxl-4">
          <div className="container">
            <div className="mb-1 mt-1" style={{ display: "flex", justifyContent: "space-between", alignContent: "center", paddingTop: "1rem" }}>
              <h5 className="card-title" style={{ paddingLeft: "1rem" }}>Color List</h5>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>back</button>
            </div>

            <div className="container">
              <div className="p-4"><input type="text" placeholder="search orders" className="form-control form-control--search mx-auto" id="table-search"  onChange={handleSearchChange}/></div>
              <table className="table table-bordered table-striped" data-sa-search-input="#table-search">
                <thead>
                  <tr>
                    <th className="w-min" data-orderable="false"><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block" aria-label="select item" /></th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Status</th>
                    <th className="w-min" data-orderable="false">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    colors?.map((color, index) => {
                      return (
                        <>
                          <tr key={color?._id}>
                            <td><input type="checkbox" className="form-check-input m-0 fs-exact-16 d-block" aria-label="select item" /></td>
                            <td>{(filters.page - 1) * filters.limit + index + 1}</td>
                            <td><Link to="#" className="text-reset">{color?.name}</Link></td>
                            <td><span style={{ backgroundColor: color?.colorCode, color: "transparent", borderRadius: "50%", display: "inline-block", width: "2rem", height: "2rem", textAlign: "center" }} /></td>
                            <td><span className="d-flex fs-6"><span className={`badge ${color?.status === "Show" ? 'badge-sa-success' : 'badge-sa-danger'}`}>{color?.status}</span><CheckBox updateStatus={updateStatus} id={color?._id} showStatus={color?.status} /></span></td>

                            <td>
                              <div className="dropdown">
                                <button className="btn btn-sa-muted btn-sm" type="button" id="order-context-menu-0" data-bs-toggle="dropdown" aria-expanded="false" aria-label="More">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="3" height="13" fill="currentColor">
                                    <path d="M1.5,8C0.7,8,0,7.3,0,6.5S0.7,5,1.5,5S3,5.7,3,6.5S2.3,8,1.5,8z M1.5,3C0.7,3,0,2.3,0,1.5S0.7,0,1.5,0 S3,0.7,3,1.5S2.3,3,1.5,3z M1.5,10C2.3,10,3,10.7,3,11.5S2.3,13,1.5,13S0,12.3,0,11.5S0.7,10,1.5,10z"></path>
                                  </svg>
                                </button>

                                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="order-context-menu-0">
                                  <li><Link className="dropdown-item" to={`/admin/edit-color/${color?._id}`}>Edit</Link></li>
                                  <li><hr className="dropdown-divider" /></li>
                                  <li><Link className="dropdown-item text-danger" to="#" onClick={() => deleteColor(color?._id)}>Delete</Link></li>
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

      <div className="sa-example__body" style={{ marginBottom: "4rem" }}>
       <nav className="d-flex justify-content-between">
          <p>
            Showing <span>{(filters.page - 1) * filters.limit + 1}</span> -{" "}
            <span>
              {(filters.page - 1) * filters.limit + colors?.length}{" "}
            </span>
            out of <span>{totalColor}</span> colors
          </p>

          <ul className="pagination pagination-sm">
            <li className={`page-item ${filters.page === 1 ? "disabled" : ""}`}>
              <Link
                to="#"
                onClick={() => handlePageChange(filters.page - 1)}
                aria-label="Previous"
                className="page-link"
              >
                Prev
              </Link>
            </li>

            <li
              className="page-item active"
              style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
            >
              <Link className="page-link" to="#">
                {filters.page}
              </Link>
            </li>

            <li
              className={`page-item ${colors?.length === 0 ? "disabled" : ""}`}
            >
              <Link
                to="#"
                onClick={() => handlePageChange(filters.page + 1)}
                aria-label="Next"
                className="page-link"
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default SizeList;


