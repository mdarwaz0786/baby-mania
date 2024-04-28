import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../../public/assets/images/logo.png";


const MiddleHeader = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/category/all-category');
        setCategories(response.data.category);
      } catch (error) {
        console.error('error while fetching categories:', error.message);
      }
    };
    fetchCategories();
  }, []);

  return (
    <header className="header">
      <div className="header-middle">
        <div className="container">
          <div className="header-left mr-md-4">
            <a href="/" className="mobile-menu-toggle  w-icon-hamburger" aria-label="menu-toggle">
            </a>
            <a href="/" className="logo ml-lg-0">
              <img src={logo} alt="logo" width={144} height={45} />
            </a>
            <form method="get" action="#" className="header-search hs-expanded hs-round d-none d-md-flex input-wrapper">
              <div className="select-box">
                <select id="category" name="category">
                  <option value="">All Categories</option>
                  {
                    categories.map((category) => {
                      return (
                        <>
                          <option value={category.name} key={category._id}>{category.name}</option>
                        </>
                      )
                    })
                  }
                </select>
              </div>
              <input type="text" className="form-control" name="search" id="search" placeholder="Search product" required />
              <button className="btn btn-search" type="submit"><i className="w-icon-search" />
              </button>
            </form>
          </div>

          <div className="header-right ml-4">
            <div className="header-call d-xs-show d-lg-flex align-items-center">
              <a href="tel:#" className="w-icon-call" />
              <div className="call-info d-lg-show">
                <h4 className="chat font-weight-normal font-size-md text-normal ls-normal text-light mb-0">
                  <a href="https://portotheme.com/cdn-cgi/l/email-protection#2605" className="text-capitalize">Live Chat</a>
                </h4>
                <a href="tel:#" className="phone-number font-weight-bolder ls-50">+91-0123456789</a>
              </div>
            </div>

            <a className="wishlist label-down link d-xs-show" href="/wishlist">
              <i className="w-icon-heart" />
              <span className="wishlist-label d-lg-show">Wishlist</span>
            </a>

            <div className="dropdown cart-dropdown cart-offcanvas mr-0 mr-lg-2">
              <div className="cart-overlay" />
              <a href="/cart" className="cart-toggle label-down link">
                <i className="w-icon-cart">
                  <span className="cart-count">2</span>
                </i>
                <span className="cart-label">Cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MiddleHeader;
