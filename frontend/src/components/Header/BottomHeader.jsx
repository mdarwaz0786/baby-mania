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
                <Link to="/track-order" className="d-xl-show"><i className="w-icon-map-marker mr-1" />Track Order</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BottomHeader;
