import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext.jsx";

const BottomHeader = () => {
  const [categories, setCategories] = useState([]);
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();

  const handleMenuClose = () => {
    document.body.classList.remove('menu-active');
  };

  const handleMenuItemClick = () => {
    const closeIcon = document.querySelector('.close-icon');
    if (closeIcon) {
      closeIcon.click();
    }
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
    fetchCategories();
  }, []);

  return (
    <>
      <header className="header">
        <div className="header-bottom sticky-content fix-top sticky-header has-dropdown">
          <div className="container">
            <div className="inner-wrap">
              <div className="header-left">
                <div className="dropdown has-border" data-visible="true">
                  <Link to="#" className="category-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
                    <span> </span>
                    <i className="w-icon-category" />
                    <span style={{ marginLeft: "1.5rem" }}>Browse Categories</span>
                  </Link>


                  <div className="dropdown-box">
                    <ul className="menu vertical-menu category-menu">
                      {
                        categories?.map((category) => {
                          return (
                            <li key={category?._id} style={{ marginLeft: "5.5rem", textDecoration: "none", listStyle: "none" }}>
                              <Link to="/product" onClick={(e) => { e.preventDefault(); navigate('/product', { state: { categoryId: category?._id } }) }}>{category?.name}</Link>
                              {
                                category?.subcategories && category?.subcategories?.length > 0 && (
                                  <ul className="megamenu">
                                    <li>
                                      <ul>
                                        {
                                          category?.subcategories?.map((subcategory) => (
                                            <li key={subcategory?._id}>
                                              <Link to="/product" onClick={(e) => { e.preventDefault(); navigate('/product', { state: { subcategoryId: subcategory?._id } }) }}>{subcategory?.name}</Link>
                                            </li>
                                          ))
                                        }
                                      </ul>
                                    </li>
                                  </ul>
                                )
                              }
                            </li>
                          )
                        })
                      }
                    </ul>
                  </div>
                </div>

                <nav className="main-nav">
                  <ul className="menu active-underline">
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/product">Shop</Link>
                    </li>

                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>

                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                <Link to="#" className="d-xl-show"><i className="w-icon-map-marker mr-1" />Track Order</Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mobile-menu-wrapper">
        <div className="mobile-menu-overlay" />
        <Link className="mobile-menu-close"><i className="close-icon" onClick={handleMenuClose} /></Link>
        <div className="mobile-menu-container scrollable">

          <div className="tab">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a href="#main-menu" className="nav-link active">Main Menu</a>
              </li>

              <li className="nav-item">
                <a href="#categories" className="nav-link">Categories</a>
              </li>
            </ul>
          </div>


          <div className="tab-content">
            <div className="tab-pane active" id="main-menu">
              <ul className="mobile-menu">
                <li onClick={handleMenuItemClick}>
                  <Link to="/">Home</Link>
                </li>

                <li onClick={handleMenuItemClick}>
                  <Link to="/product">Shop</Link>
                </li>

                <li onClick={handleMenuItemClick}>
                  <Link to="/contact-us">Contact Us</Link>
                </li>

                <li onClick={handleMenuItemClick}>
                  <Link to="/about-us">About Us</Link>
                </li>

                <li onClick={handleMenuItemClick}>
                  <Link to="/wishlist">Wishlist</Link>
                </li>

                {
                  isLoggedIn ?
                    (
                      <>
                        <li onClick={handleMenuItemClick}>
                          <Link to="#">{user?.name}</Link>
                        </li>
                        <li onClick={handleMenuItemClick}>
                          <Link to="/logout">Log Out </Link>
                        </li>
                      </>
                    ) :
                    (
                      <li onClick={handleMenuItemClick}>
                        <Link to="/login">Log in</Link>
                      </li>
                    )
                }
              </ul>
            </div>

            <div className="tab-pane" id="categories">
              <ul className="mobile-menu">
                {
                  categories?.map((category) => {
                    return (
                      <>
                        <li key={category?._id} style={{ textDecoration: "none", listStyle: "none" }} onClick={handleMenuItemClick}>
                          <Link to={`/product/category-product/${category?._id}`}>{category?.name}</Link>
                        </li>
                      </>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHeader;
