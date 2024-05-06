import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import bannerWomen from "../../assets/banner_women.png";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [totalProduct, setTotalProduct] = useState();
  const [filters, setFilters] = useState({
    category: '',
    color: '',
    size: '',
    search: '',
    sort: 'relevance',
    page: 1,
    limit: 6,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLinkClick = () => {
    document.body.classList.add('sidebar-active');
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: prevFilters[name].includes(value)
        ? prevFilters[name].filter((item) => item !== value) // Remove if already checked
        : [...prevFilters[name], value] // Add if not checked
    }));
  };

  const handlePageChange = (page) => {
    setFilters((prevFilters) => ({ ...prevFilters, page }));
  };

  const handlePageLimitChange = (e) => {
    const newLimit = parseInt(e.target.value);
    setFilters(prevFilters => ({
      ...prevFilters,
      limit: newLimit
    }));
  };

  const handleSortChange = (e) => {
    const newSort = e.target.value;
    setFilters(prevFilters => ({
      ...prevFilters,
      sort: newSort
    }));
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/v1/product/all-product', { params: filters });
        setProducts(response?.data?.product);
        setTotalProduct(response?.data?.totalCount)
      } catch (error) {
        console.error('error while fetching products:', error.message);
      }
    };

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

    fetchProducts();
    fetchCategories();
    fetchSizes();
    fetchColors();
  }, [filters]);


  return (
    <>
      {/* Start Banner */}
      <div className="container mt-5 mb-5">
        <img src={bannerWomen} alt="banner-women" />
      </div>
      {/* End Banner */}

      <div className="container">
        <div className="shop-content row gutter-lg mb-10">
          {/* Start Sidebar*/}
          <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
            <div className="sidebar-overlay" />
            <Link className="sidebar-close" to="#" ><i className="close-icon" onClick={() => document.body.classList.remove('sidebar-active')} /></Link>
            <div className="sidebar-content scrollable">
              <div className="sticky-sidebar">
                <div className="filter-actions">
                  <label>Filter :</label>
                  <Link to="/product" className="btn btn-dark btn-link filter-clean">Clean All</Link>
                </div>

                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>All Categories</span></h3>
                  <ul className="widget-body filter-items search-ul">
                    {
                      categories.map((category) => {
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
                      colors.map((color) => {
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
          {/* End Sidebar */}


          {/* Start Main Content */}
          <div className="main-content">
            {/* Start Sorting */}
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
                    <option value={3}>Show 3</option>
                    <option value={6} selected="selected">Show 6</option>
                    <option value={9}>Show 9</option>
                    <option value={12}>Show 12</option>
                  </select>
                </div>
              </div>
            </nav>
            {/* End Sorting */}

            {/* Start Product */}
            <div className="product-wrapper row" style={{ marginTop: "2rem" }}>
              {
                products.map((product) => {
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-6" key={product?._id}>
                      <div className="product text-center">
                        <figure className="product-media">
                          <Link to={`/product/single-product/${product?._id}`}>
                            <img src={product?.items[0]?.image} alt="Product" width={100} height={338} />
                          </Link>
                          <div className="product-action-horizontal">
                            <Link to="/product" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <Link to="/product" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist" />
                          </div>
                        </figure>
                        <div className="product-details">
                          <div className="product-cat">
                            <Link to="/product">{product?.category?.name}</Link>
                          </div>
                          <h3 className="product-name">
                            <Link to="/product">{product?.name}</Link>
                          </h3>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: '100%' }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <Link to="/product" className="rating-reviews">({product?.rating} reviews)</Link>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price" style={{ display: "flex", gap: "1.5rem" }}>
                              <span style={{ textDecoration: "line-through", color: "#aca9a9" }}>₹{product?.salePrice} </span>
                              <span> ₹{product?.salePrice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            {/* End Product */}

            {/* Start Pagination */}
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

                <li className="next">
                  <Link to="#" onClick={() => handlePageChange(filters.page + 1)} aria-label="Next">
                    Next<i className="w-icon-long-arrow-right" />
                  </Link>
                </li>
              </ul>
            </nav>
            {/* End Pagination */}
          </div>
          {/* End Main Content */}
        </div>
      </div>
    </>
  );
};

export default Product;

