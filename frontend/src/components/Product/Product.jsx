import { useEffect, useState } from "react";
import axios from "axios";
import image1 from "../../../public/assets/images/demos/demo1/categories/3-2.jpg";
import image2 from "../../../public/assets/images/demos/demo1/categories/1-2.jpg";
import { Link } from "react-router-dom";


const Product = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/product/all-product');
        setProducts(response.data.product);
      } catch (error) {
        console.error('error while fetching products:', error.message);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/category/all-category');
        setCategories(response.data.category);
      } catch (error) {
        console.error('error while fetching categories:', error.message);
      }
    };

    const fetchSizes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/size/all-size');
        setSizes(response.data.size);
      } catch (error) {
        console.error('error while fetching sizes:', error.message);
      }
    };

    const fetchColors = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/color/all-color');
        setColors(response.data.color);
      } catch (error) {
        console.error('error while fetching colors:', error.message);
      }
    };

    fetchProducts();
    fetchCategories();
    fetchSizes();
    fetchColors();
  }, []);

  return (
    <>
      <div className="row category-banner-wrapper appear-animate pt-6 pb-8" style={{ marginLeft: "1rem", marginRight: "1rem" }}>
        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed category-banner-2 br-xs">
            <figure>
              <img src={image1} alt="Category Banner" width={610} height={200} style={{ backgroundColor: '#E5E5E5' }} />
            </figure>
            <div className="banner-content y-50 pt-1">
              <h5 className="banner-subtitle font-weight-bold text-uppercase">Trending Now</h5>
              <h3 className="banner-title font-weight-bolder text-capitalize">Womens
                Lifestyle<br />Collection</h3>
              <a href="shop-banner-sidebar.html" className="btn btn-dark btn-link btn-underline btn-icon-right">Shop Now<i className="w-icon-long-arrow-right" /></a>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="banner banner-fixed br-xs">
            <figure>
              <img src={image2} alt="Category Banner" width={610} height={160} style={{ backgroundColor: '#636363' }} />
            </figure>
            <div className="banner-content y-50 mt-0">
              <h5 className="banner-subtitle font-weight-normal text-capitalize">New Arrivals</h5>
              <h3 className="banner-title text-white text-uppercase">Accessories<br /><span className="font-weight-normal text-capitalize">Collection</span></h3>
              <div className="banner-price-info text-white font-weight-normal text-capitalize">Only From
                <span className="text-secondary font-weight-bolder">$90.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="shop-content row gutter-lg mb-10">
          <aside className="sidebar shop-sidebar sticky-sidebar-wrapper sidebar-fixed">
            {/* Start of Sidebar Overlay */}
            <div className="sidebar-overlay" />
            <a className="sidebar-close" href="#"><i className="close-icon" /></a>
            {/* Start of Sidebar Content */}
            <div className="sidebar-content scrollable">
              {/* Start of Sticky Sidebar */}
              <div className="sticky-sidebar">
                <div className="filter-actions">
                  <label>Filter :</label>
                  <a href="#" className="btn btn-dark btn-link filter-clean">Clean All</a>
                </div>
                {/* Start of Collapsible widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>All Categories</span></h3>
                  <ul className="widget-body filter-items search-ul">
                    {
                      categories.map((category) => {
                        return (
                          <>
                            <li key={category._id}><Link to={`/product/${category._id}`}>{category.name}</Link></li>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>Size</span></h3>
                  <ul className="widget-body filter-items mt-1">
                    {
                      sizes.map((size) => {
                        return (
                          <>
                            <li key={size._id}><Link to={`/product/${size._id}`}>{size.name}</Link></li>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
                {/* Start of Collapsible Widget */}
                <div className="widget widget-collapsible">
                  <h3 className="widget-title"><span>Color</span></h3>
                  <ul className="widget-body filter-items mt-1">
                    {
                      colors.map((color) => {
                        return (
                          <>
                            <li key={color._id}><Link to={`/product/${color._id}`}>{color.name}</Link></li>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>
                {/* End of Collapsible Widget */}
              </div>
              {/* End of Sidebar Content */}
            </div>
            {/* End of Sidebar Content */}
          </aside>
          {/* End of Shop Sidebar */}


          {/* Start of Shop Main Content */}
          <div className="main-content">
            <nav className="toolbox sticky-toolbox sticky-content fix-top" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div className="toolbox-left">
                <a href="#" className="btn btn-primary btn-outline btn-rounded left-sidebar-toggle 
                                  btn-icon-left d-block d-lg-none"><i className="w-icon-category" /><span>Filters</span></a>
                <div className="toolbox-item toolbox-sort select-box text-dark" style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center" }}>
                  <label style={{ fontSize: "1.5rem", fontWeight: "600" }}>Sort By :</label>
                  <select name="orderby" className="form-control">
                    <option value="default" selected="selected">Default sorting</option>
                    <option value="price-low">Sort by price: low to high</option>
                    <option value="price-high">Sort by price: high to low</option>
                  </select>
                </div>
              </div>

              <div className="toolbox-right" style={{ display: "flex", gap: "1.5rem" }}>
                <div className="toolbox-item toolbox-show select-box">
                  <select name="count" className="form-control">
                    <option value={9} selected="selected">Show 9</option>
                    <option value={12}>Show 12</option>
                    <option value={24}>Show 24</option>
                    <option value={36}>Show 36</option>
                  </select>
                </div>

                <div className="toolbox-item toolbox-layout" style={{ display: "flex", gap: "0.5rem", justifyContent: "center", alignItems: "center" }}>
                  <a href="shop-banner-sidebar.html" className="icon-mode-grid btn-layout active" style={{ color: "#1b1b1b", fontSize: "1.8rem" }}>
                    <i className="w-icon-grid" />
                  </a>
                  <a href="shop-list.html" className="icon-mode-list btn-layout" style={{ color: "#d6d4d4", fontSize: "1.8rem" }}>
                    <i className="w-icon-list" />
                  </a>
                </div>
              </div>
            </nav>

            {/* Start of Product */}
            <div className="product-wrapper row" style={{ marginTop: "2rem" }}>
              {
                products.map((product) => {
                  return (
                    <div className="col-lg-4 col-md-4 col-sm-6" key={product._id}>
                      <div className="product text-center">
                        <figure className="product-media">
                          <a href={`/product/single-product/${product._id}`}>
                            <img src={`/images/${product.image}`} alt="Product" width={100} height={338} />
                          </a>
                          <div className="product-action-horizontal">
                            <a href="/cart" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                            <a href="/wishlist" className="btn-product-icon btn-wishlist w-icon-heart" title="Wishlist" />
                          </div>
                        </figure>
                        <div className="product-details">
                          <div className="product-cat">
                            <a href="shop-banner-sidebar.html">{product.category.name}</a>
                          </div>
                          <h3 className="product-name">
                            <a href="product-default.html">{product.name}</a>
                          </h3>
                          <div className="ratings-container">
                            <div className="ratings-full">
                              <span className="ratings" style={{ width: '100%' }} />
                              <span className="tooltiptext tooltip-top" />
                            </div>
                            <a href="product-default.html" className="rating-reviews">({product.rating} reviews)</a>
                          </div>
                          <div className="product-pa-wrapper">
                            <div className="product-price" style={{ display: "flex", gap: "1.5rem" }}>
                              <span style={{ textDecoration: "line-through", color: "#aca9a9" }}>${product.salePrice} </span>
                              <span> ${product.salePrice}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            {/* End of Product */}
            <div className="toolbox toolbox-pagination justify-content-between" style={{ display: "flex" }}>
              <p className="showing-info mb-2 mb-sm-0">
                Showing <span> 1-9 of 60 </span>Products
              </p>
              <ul className="pagination">
                <li className="prev disabled">
                  <a href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
                    <i className="w-icon-long-arrow-left" />Prev
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="next">
                  <a href="#" aria-label="Next">
                    Next<i className="w-icon-long-arrow-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

