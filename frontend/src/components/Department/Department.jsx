import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Department = () => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('tab1');

  const openTab = (tabId) => {
    setActiveTab(tabId);
  };

  const fetchProduct = async () => {
    try {
      const response = await axios.get("/api/v1/product/all-product");
      setProducts(response?.data?.product);
    } catch (error) {
      console.error("Error fetching product:", error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);


  return (
    <>
      <h3 className='text-center mt-5 mb-5' style={{ paddingTop: "2rem" }}>Popular Department</h3>
      <div className="container">
        <div className="nav nav-tabs justify-content-center mb-1" style={{ borderBottom: "none", paddingBottom: "1rem" }}>
          <li className="nav-item mr-2 mb-2">
            <button className={`nav-link br-sm font-size-md ls-normal ${activeTab === 'tab1' ? 'active' : ''}`} style={{ cursor: "pointer", border: activeTab === 'tab1' ? '1px solid black' : 'none' }} onClick={() => openTab('tab1')}>New Product</button>
          </li>

          <li className="nav-item mr-2 mb-2">
            <button className={`nav-link br-sm font-size-md ls-normal ${activeTab === 'tab2' ? 'active' : ''}`} style={{ cursor: "pointer", border: activeTab === 'tab2' ? '1px solid black' : 'none' }} onClick={() => openTab('tab2')}>Best Selling Product</button>
          </li>

          <li className="nav-item mr-2 mb-2">
            <button className={`nav-link br-sm font-size-md ls-normal ${activeTab === 'tab3' ? 'active' : ''}`} style={{ cursor: "pointer", border: activeTab === 'tab3' ? '1px solid black' : 'none' }} onClick={() => openTab('tab3')}>Featured Product</button>
          </li>
        </div>

        <div style={{ display: activeTab === 'tab1' ? 'block' : 'none' }}>
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {
              products?.filter((product) => product.status === "Show" && product.newProduct === "Yes").map((product) => {
                return (
                  <div className="product-wrap" key={product?._id}>
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to={`/product/single-product/${product?._id}`}>
                          <img src={product?.items[0]?.image} alt="Product" width={300} height={338} />
                        </Link>

                        <div className="product-action-vertical">
                          <Link to="/" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                          <Link to="/" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        </div>
                      </figure>

                      <div className="product-details">
                        <h4 className="product-name"><Link to="/">{product?.name}</Link></h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: '60%' }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>

                          <Link to="/" className="rating-reviews">({product?.rating} Reviews)</Link>
                        </div>

                        <div className="product-price">
                          <ins className="new-price">₹{product?.salePrice}</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div style={{ display: activeTab === 'tab2' ? 'block' : 'none' }}>
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {
              products?.filter((product) => product.status === "Show" && product.bestSellingProduct === "Yes").map((product) => {
                return (
                  <div className="product-wrap" key={product?._id}>
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to={`/product/single-product/${product?._id}`}>
                          <img src={product?.items[0]?.image} alt="Product" width={300} height={338} />
                        </Link>

                        <div className="product-action-vertical">
                          <Link to="/" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                          <Link to="/" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        </div>
                      </figure>

                      <div className="product-details">
                        <h4 className="product-name"><Link to="/">{product?.name}</Link></h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: '60%' }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>

                          <Link to="/" className="rating-reviews">({product?.rating} Reviews)</Link>
                        </div>

                        <div className="product-price">
                          <ins className="new-price">₹{product?.salePrice}</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div style={{ display: activeTab === 'tab3' ? 'block' : 'none' }}>
          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {
              products?.filter((product) => product.status === "Show" && product.featuredProduct === "Yes").map((product) => {
                return (
                  <div className="product-wrap" key={product?._id}>
                    <div className="product text-center">
                      <figure className="product-media">
                        <Link to={`/product/single-product/${product?._id}`}>
                          <img src={product?.items[0]?.image} alt="Product" width={300} height={338} />
                        </Link>

                        <div className="product-action-vertical">
                          <Link to="/" className="btn-product-icon btn-cart w-icon-cart" title="Add to cart" />
                          <Link to="/" className="btn-product-icon btn-wishlist w-icon-heart" title="Add to wishlist" />
                        </div>
                      </figure>

                      <div className="product-details">
                        <h4 className="product-name"><Link to="/">{product?.name}</Link></h4>
                        <div className="ratings-container">
                          <div className="ratings-full">
                            <span className="ratings" style={{ width: '60%' }} />
                            <span className="tooltiptext tooltip-top" />
                          </div>

                          <Link to="/" className="rating-reviews">({product?.rating} Reviews)</Link>
                        </div>

                        <div className="product-price">
                          <ins className="new-price">₹{product?.salePrice}</ins>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
