/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";
import bannerKids from "../../assets/banner_kids.png";

const SearchedProduct = () => {
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [totalProduct, setTotalProduct] = useState();
  const [filters, setFilters] = useState({
    category: [],
    subcategory: [],
    color: [],
    size: [],
    search: '',
    sort: 'relevance',
    page: 1,
    limit: 12,
  });

  const handleScroll = () => {
    const scrollOptions = {
      top: window.innerWidth > 768 ? window.innerHeight * 0.79 : window.innerHeight * 0.39,
      behavior: 'smooth'
    };

    window.scrollTo({ ...scrollOptions, left: 0 });
  };

  const cleanAll = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      category: [],
      subcategory: [],
      color: [],
      size: [],
    }));
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/v1/product/all-product', { params: filters });
      setProducts(response?.data?.product);
      setTotalProduct(response?.data?.totalCount);
    } catch (error) {
      console.error('error while fetching products:', error.message);
    }
  };

  useEffect(() => {
    const { q } = location.state || {};

    if (q) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        search: q || '',
      }));
    }
  }, [location.state]);

  useEffect(() => {
    if (filters.search) {
      fetchProducts();
    }
  }, [filters]);

  const handleLinkClick = () => {
    document.body.classList.add('sidebar-active');
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;

    if (name === 'size' || name === 'color') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked
          ? [...prevFilters[name], value]
          : prevFilters[name].filter((item) => item !== value),
      }));
    } else if (name === 'category') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        category: checked
          ? [...prevFilters.category, value]
          : prevFilters.category.filter((item) => item !== value),
      }));
    } else if (name === 'subcategory') {
      setFilters((prevFilters) => ({
        ...prevFilters,
        subcategory: checked
          ? [...prevFilters.subcategory, value]
          : prevFilters.subcategory.filter((item) => item !== value),
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: value,
      }));
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || (newPage > filters.page && products.length === 0)) {
      return;
    }
    setFilters((prevFilters) => ({ ...prevFilters, page: newPage }));
    handleScroll();
  };

  const handlePageLimitChange = (e) => {
    const newLimit = parseInt(e.target.value);
    setFilters((prevFilters) => ({ ...prevFilters, limit: newLimit }));
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setFilters((prevFilters) => ({ ...prevFilters, sort: newSort }));
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('/api/v1/category/all-category');
        setCategories(response?.data?.category);
      } catch (error) {
        console.error('error while fetching categories:', error.message);
      }
    };

    const fetchSizes = async () => {
      try {
        const response = await axios.get('/api/v1/size/all-size');
        setSizes(response?.data?.size);
      } catch (error) {
        console.error('error while fetching sizes:', error.message);
      }
    };

    const fetchColors = async () => {
      try {
        const response = await axios.get('/api/v1/color/all-color');
        setColors(response?.data?.color);
      } catch (error) {
        console.error('error while fetching colors:', error.message);
      }
    };

    fetchCategories();
    fetchSizes();
    fetchColors();
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <Link to="/"><img src={bannerKids} alt="banner-women" style={{ cursor: "pointer" }} /></Link>
      </div>

      <div className="container">
        <div className="shop-content row gutter-lg mb-10">
          <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
            <div className="sidebar-overlay" />
            <Link className="sidebar-close" to="#" ><i className="close-icon" onClick={() => document.body.classList.remove('sidebar-active')} /></Link>
            <div className="sidebar-content scrollable">
              <div className="sticky-sidebar">
                <div className="filter-actions">
                  <label>Filter :</label>
                  <Link to="#" className="btn btn-dark btn-link filter-clean" onClick={cleanAll}>Clean All</Link>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>All Categories</span></h3>
                  <ul className="widget-body filter-items search-ul">
                    {
                      categories?.map((category) => {
                        return (
                          <>
                            <li key={category?._id} style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                              <input type="checkbox" name="category" value={category?._id} onChange={handleFilterChange} checked={filters.category.includes(category._id)} />
                              <label>{category?.name}</label>
                            </li>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>Sub Categories</span></h3>
                  <ul className="widget-body filter-items search-ul">
                    {
                      categories?.map((category) =>
                        category?.subcategories?.map((subcategory) => (
                          <li key={subcategory?._id} style={{ display: "flex", gap: "1rem", marginBottom: "2rem", }} >
                            <input type="checkbox" name="subcategory" value={subcategory?._id} onChange={handleFilterChange} checked={filters.subcategory.includes(subcategory._id)} />
                            <label>{subcategory?.name}</label>
                          </li>
                        ))
                      )
                    }
                  </ul>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>Size</span></h3>
                  <ul className="widget-body filter-items mt-1">
                    {
                      sizes?.map((size) => {
                        return (
                          <>
                            <li key={size?._id} style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                              <input type="checkbox" name="size" value={size?._id} onChange={handleFilterChange} checked={filters.size.includes(size?._id)} />
                              <label>{size?.name}</label>
                            </li>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>Color</span></h3>
                  <ul className="widget-body filter-items mt-1">
                    {
                      colors?.filter((color) => color?.status === "Show").map((color) => {
                        return (
                          <>
                            <li key={color?._id} style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
                              <input type="checkbox" name="color" value={color?._id} onChange={handleFilterChange} checked={filters.color.includes(color?._id)} />
                              <label>{color?.name}</label>
                            </li>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </aside>

          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="toolbox-left">
                <Link to="#" className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle btn-icon-left d-block d-lg-none" onClick={handleLinkClick}>
                  <i className="w-icon-category" />
                  <span>Filters</span>
                </Link>
                <div className="toolbox-item toolbox-sort select-box text-dark" style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                  <label style={{ fontSize: "1.5rem", fontWeight: "600" }}>Sort By :</label>
                  <select name="orderby" className="form-control" value={filters.sort} onChange={handleSortChange}>
                    <option value="relevance">Relevance</option>
                    <option value="latest">Latest</option>
                    <option value="price-low-to-high">Price low to high</option>
                    <option value="price-high-to-low">Price high to low</option>
                  </select>
                </div>
              </div>

              <div className="toolbox-right" style={{ display: "flex", gap: "1.5rem" }}>
                <div className="toolbox-item toolbox-show select-box">
                  <select name="count" className="form-control" value={filters.limit} onChange={handlePageLimitChange}>
                    <option value={4}>Show 4</option>
                    <option value={8}>Show 8</option>
                    <option value={12}>Show 12</option>
                    <option value={16}>Show 16</option>
                    <option value={20}>Show 20</option>
                  </select>
                </div>
              </div>
            </nav>

            <div className="row cols-xl-4 cols-md-4 cols-sm-3 cols-2" style={{ marginTop: "2rem" }}>
              {
                products?.map((product) => (
                  <div className="product-wrap" key={product?._id}>
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to={`/product/single-product/${product?._id}`}>
                          <img className="product-image" src={product?.items[0]?.image} alt="product-image" />
                        </Link>
                        <div className="product-action-vertical">
                          <Link to="#" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                          <Link to="#" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        </div>
                      </figure>
                      <div className="product-details">
                        <h4 className="product-name"><Link to="#">{product?.name}</Link></h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: '60%' }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>
                          <Link to="#" className="rating-reviews">({product?.rating} Reviews)</Link>
                        </div>
                        <div className="product-price">
                          <ins className="new-price">₹{product?.salePrice}</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
              {products.length === 0 && <h5 className="text-center">No Data</h5>}
            </div>

            <nav className="toolbox toolbox-pagination justify-content-between">
              <p className="showing-info">
                Showing <span>{((filters.page - 1) * filters.limit) + 1}</span> - <span>{((filters.page - 1) * filters.limit) + products?.length}</span>out of <span>{totalProduct}</span> Products
              </p>

              <ul className="pagination">
                <li className={`prev ${filters.page === 1 ? 'disabled' : ''}`}>
                  <Link to="#" onClick={() => handlePageChange(filters.page - 1)} aria-label="Previous">
                    <i className="w-icon-long-arrow-left" />Prev
                  </Link>
                </li>

                <li className="page-item active">
                  <Link className="page-link" to="#">{filters.page}</Link>
                </li>

                <li className={`next ${products.length === 0 ? 'disabled' : ''}`}>
                  <Link to="#" onClick={() => handlePageChange(filters.page + 1)} aria-label="Next">
                    Next<i className="w-icon-long-arrow-right" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedProduct;
