import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import banner from "../../assets/banner3.jpg";
import { useAuth } from "../../context/authContext.jsx";


const SingleProduct = () => {
  const [products, setProducts] = useState({});
  const [allProducts, setAllProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [categoryId, setCategoryId] = useState();
  const { productId } = useParams();
  const { validToken, isLoggedIn } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleColorSelect = (colorId, imageUrl) => {
    setSelectedColor((prevSelectedColor) => (prevSelectedColor === colorId ? null : colorId));
    setSelectedImage("");
    setMainImage(imageUrl);
  };

  const handleSizeSelect = (sizeId) => {
    setSelectedSize((prevSelectedSize) => (prevSelectedSize === sizeId ? null : sizeId));
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`/api/v1/product/single-product/${productId}`);
        setProducts(response?.data?.product);
        setCategoryId(response?.data?.product?.category?._id);
      } catch (error) {
        console.log('error while fetching products:', error.message);
      }
    };

    fetchProducts();
  }, [productId]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get("/api/v1/product/all-product");
        setAllProducts(response?.data?.product);
      } catch (error) {
        console.log('error while fetching products:', error.message);
      }
    };
    fetchAllProducts();
  }, []);

  const product = productId;
  const color = selectedColor;
  const size = selectedSize;

  const createCart = async () => {
    try {
      if (!selectedColor || !selectedSize) {
        alert('select color and size.');
        return;
      }

      if (!isLoggedIn) {
        alert('you are not logged in.');
        return;
      }

      await axios.post("/api/v1/cart/create-user-cart", { product, color, size, quantity }, {
        headers: {
          Authorization: validToken,
        },
      });

      alert("item added to cart");
      navigate("/cart");
    } catch (error) {
      console.log('error while creating cart:', error.message);
    }
  };

  return (
    <>
      <div className="page-content">
        <div className="container">
          <div className="row gutter-lg">

            <div className="main-content">
              <div className="product product-single row">

                {
                  Object.keys(products).length > 0 && (
                    <div className="col-md-6 mb-6">
                      <div className="product-gallery product-gallery-sticky">
                        <div className="swiper-container product-single-swiper swiper-theme nav-inner">
                          <div className="swiper-wrapper row cols-1 gutter-no">
                            <div className="swiper-slide">
                              <img src={selectedImage || mainImage || products?.items[0]?.image} width={500} height={700} alt="Main product" />
                            </div>
                          </div>
                        </div>

                        <div className="product-thumbs-wrap swiper-container">
                          <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                            {
                              products?.items?.map((item, index) => (
                                <div className="product-thumb swiper-slide" key={index} onClick={() => handleImageClick(item?.image)}>
                                  <img
                                    src={item?.image}
                                    alt="Sub Image"
                                    width={800}
                                    height={900}
                                  />
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                <div className="col-md-6 mb-4 mb-md-6">
                  <div className="product-details" data-sticky-options="{'minWidth': 767}">
                    <h1 className="product-title">{products?.name}</h1>
                    <div className="product-bm-wrapper">
                      <div className="product-meta">
                        <div className="product-categories">Category: <span className="product-category"><Link to="#">{products?.category?.name}</Link></span></div>
                        <div className="product-sku">SKU: <span>{products?.skuCode}</span></div>
                      </div>
                    </div>

                    <hr className="product-divider" />

                    <div className="product-price"><ins className="new-price">₹ {products?.salePrice}</ins></div>

                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{ width: '80%' }} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <Link to="#" className="rating-reviews scroll-to">({products?.rating} Reviews)</Link>
                    </div>

                    <div className="product-short-desc">
                      <ul className="list-type-check list-style-none">
                        <li>{products?.description}</li>
                        <li>{products?.smallInfo}</li>
                      </ul>
                    </div>

                    <hr className="product-divider" />

                    {
                      Object.keys(products).length > 0 && (
                        <>
                          <div className="product-form product-variation-form product-color-swatch">
                            <label>Color:</label>
                            <div className="d-flex align-items-center product-variations">
                              {
                                products?.items?.map((item) => (
                                  item?.color?.map((color) => (
                                    <Link
                                      key={color?._id}
                                      to="#"
                                      className={`color ${selectedColor === color?._id ? 'active' : ''}`}
                                      style={{ backgroundColor: color?.colorCode }}
                                      onClick={() => handleColorSelect(color?._id, item?.image)}
                                    />
                                  ))
                                ))
                              }
                            </div>
                          </div>

                          <div className="product-form product-variation-form product-size-swatch">
                            <label className="mb-1">Size:</label>
                            <div className="flex-wrap d-flex align-items-center product-variations">
                              {
                                products?.items?.map((item) => (
                                  item?.size?.map((size) => (
                                    <Link key={size?._id}
                                      to="#"
                                      className={`size ${selectedSize === size?._id ? 'active' : ''}`}
                                      onClick={() => handleSizeSelect(size?._id)}>{size?.name}
                                    </Link>
                                  ))
                                ))
                              }
                            </div>
                          </div>
                        </>
                      )}

                    <div className="product-variation-price"><span /></div>

                    <div className="fix-bottom product-sticky-content sticky-content">
                      <div className="product-form container">
                        <div className="product-qty-form">
                          <div className="input-group">
                            <input className="quantity form-control" type="number" min={1} max={100000} value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                            <button className="quantity-plus w-icon-plus" onClick={handleIncrement} />
                            <button className="quantity-minus w-icon-minus" onClick={handleDecrement} />
                          </div>
                        </div>

                        <button className="btn btn-primary btn-cart" onClick={createCart}>
                          <i className="w-icon-cart" />
                          <span>Add to Cart</span>
                        </button>
                      </div>
                    </div>


                    <div className="social-links-wrapper">
                      <div className="social-links">
                        <div className="social-icons social-no-color border-thin">
                          <Link to="#" className="social-icon social-facebook w-icon-facebook" />
                          <Link to="#" className="social-icon social-twitter w-icon-twitter" />
                          <Link to="#" className="social-icon social-pinterest fab fa-pinterest-p" />
                          <Link to="#" className="social-icon social-whatsapp fab fa-whatsapp" />
                          <Link to="#" className="social-icon social-youtube fab fa-linkedin-in" />
                        </div>
                      </div>

                      <span className="divider d-xs-show" />

                      <div className="product-link-wrapper d-flex">
                        <Link to="#" className="btn-product-icon btn-wishlist w-icon-heart"><span /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
              <div className="sidebar-overlay" />
              <Link className="sidebar-close" to="#"><i className="close-icon" /></Link>
              <Link to="#" className="sidebar-toggle d-flex d-lg-none"><i className="fas fa-chevron-left" /></Link>
              <div className="sidebar-content scrollable">
                <div className="sticky-sidebar">
                  <div className="widget widget-icon-box mb-6">
                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-truck" />
                      </span>

                      <div className="icon-box-content">
                        <h4 className="icon-box-title">Free Shipping &amp; Returns</h4>
                        <p>For all orders over $99</p>
                      </div>
                    </div>

                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-bag" />
                      </span>

                      <div className="icon-box-content">
                        <h4 className="icon-box-title">Secure Payment</h4>
                        <p>We ensure secure payment</p>
                      </div>
                    </div>

                    <div className="icon-box icon-box-side">
                      <span className="icon-box-icon text-dark">
                        <i className="w-icon-money" />
                      </span>

                      <div className="icon-box-content">
                        <h4 className="icon-box-title">Money Back Guarantee</h4>
                        <p>Any back within 30 days</p>
                      </div>
                    </div>
                  </div>


                  <div className="widget widget-banner mb-9">
                    <div className="banner banner-fixed br-sm">
                      <figure>
                        <Link to="/product"> <img src={banner} alt="Banner" width={266} height={220} style={{ backgroundColor: '#1D2D44' }} /></Link>
                      </figure>

                      <div className="banner-content">
                        <div className="banner-price-info font-weight-bolder text-white lh-1 ls-25">
                          40<sup className="font-weight-bold">%</sup><sub className="font-weight-bold text-uppercase ls-25">Off</sub>
                        </div>

                        <h4 className="banner-subtitle text-white font-weight-bolder text-uppercase mb-0">
                          Ultimate Sale</h4>
                      </div>
                    </div>
                  </div>
                  {/* End Widget Banner */}
                </div>
              </div>
            </aside>
            {/* End Sidebar */}
          </div>

          <h3 className="text-center mb-5 mt-10">Related Product</h3>

          <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
            {
              allProducts?.filter((product) => product?.category?._id === categoryId).map((product) => (
                <div className="product-wrap" key={product?._id}>
                  <div className="product text-center">
                    <figure className="product-media">
                      <Link to={`/product/single-product/${product?._id}`} onClick={() => window.scrollTo(0, 0)}>
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
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
