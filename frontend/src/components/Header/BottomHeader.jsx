import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BottomHeader = () => {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/category/all-category');
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
                  <Link to="/" className="category-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" data-display="static" title="Browse Categories">
                    <span> </span>
                    <i className="w-icon-category" />
                    <span style={{ marginLeft: "1.5rem" }}>Browse Categories</span>
                  </Link>

                  <div className="dropdown-box">
                    <ul className="vertical-menu category-menu">
                      {
                        categories.map((category) => {
                          return (
                            <>
                              <li key={category?._id} style={{ marginLeft: "5.5rem", textDecoration: "none", listStyle: "none" }}>
                                <Link to="/product">{category?.name}</Link>
                              </li>
                            </>
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
        <Link className="mobile-menu-close"><i className="close-icon" onClick={() => { document.body.classList.remove('menu-active'); window.location.reload() }} /></Link>
        <div className="mobile-menu-container scrollable">
          <form action="#" method="get" className="input-wrapper">
            <input type="text" className="form-control" name="search" autoComplete="off" placeholder="Search" required />
            <button className="btn btn-search" type="submit">
              <i className="w-icon-search" />
            </button>
          </form>
          {/* End of Search Form */}


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
                <li>
                  <Link to="/wishlist">Wishlist</Link>
                </li>
              </ul>
            </div>


            <div className="tab-pane" id="categories">
              <ul className="mobile-menu">
                {
                  categories.map((category) => {
                    return (
                      <>
                        <li key={category?._id} style={{ textDecoration: "none", listStyle: "none" }}>
                          <Link to="/product">{category?.name}</Link>
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
