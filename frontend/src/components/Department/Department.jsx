import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Department = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("/api/v1/product/all-product");
      setProducts(response?.data?.product);
    } catch (error) {
      console.error("Error fetching product: ", error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(products);

  return (
    <>
      <div className="container">
        <h2 className="title justify-content-center ls-normal mb-4 mt-10 pt-1 appear-animate">Popular Departments</h2>
        <div className="tab tab-nav-boxed tab-nav-outline appear-animate">
          <ul className="nav nav-tabs justify-content-center" role="tablist">
            <li className="nav-item mr-2 mb-2">
              <a className="nav-link active br-sm font-size-md ls-normal" href="#tab1-1">New Product</a>
            </li>

            <li className="nav-item mr-2 mb-2">
              <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-2">Best Selling Product</a>
            </li>

            <li className="nav-item mr-2 mb-2">
              <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-3">Special Product</a>
            </li>

            <li className="nav-item mr-0 mb-2">
              <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-4" style={{ marginRight: "1rem" }}>Featured Product</a>
            </li>

            <li className="nav-item mr-0 mb-2">
              <a className="nav-link br-sm font-size-md ls-normal" href="#tab1-5">Latest Product</a>
            </li>
          </ul>
        </div>


        <div className="tab-content product-wrapper appear-animate">
          <div className="tab-pane active pt-4" id="tab1-1">
            <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
              {
                products?.filter((product) => product.status === "Show" && product.newProduct === "Yes").map((product) => {
                  return (
                    <>
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
                    </>
                  )
                })
              }
            </div>
          </div>
          {/* End of Tab Pane */}


          <div className="tab-pane pt-4" id="tab1-2">
            <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
              {
                products?.filter((product) => product.status === "Show" && product.bestSellingProduct === "Yes").map((product) => {
                  return (
                    <>
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
                    </>
                  )
                })
              }
            </div>
          </div>
          {/* End of Tab Pane */}


          <div className="tab-pane pt-4" id="tab1-3">
            <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
              {
                products?.filter((product) => product.status === "Show" && product.specialProduct === "Yes").map((product) => {
                  return (
                    <>
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
                    </>
                  )
                })
              }
            </div>
          </div>
          {/* End of Tab Pane */}


          <div className="tab-pane pt-4" id="tab1-4">
            <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
              {
                products?.filter((product) => product.status === "Show" && product.featuredProduct === "Yes").map((product) => {
                  return (
                    <>
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
                    </>
                  )
                })
              }
            </div>
          </div>
          {/* End of Tab Pane */}


          <div className="tab-pane pt-4" id="tab1-5">
            <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
              {
                products?.filter((product) => product.status === "Show" && product.latestProduct === "Yes").map((product) => {
                  return (
                    <>
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
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Department;
