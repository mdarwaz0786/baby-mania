import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import banner from "../../../public/assets/images/shop/banner3.jpg";
import { useAuth } from "../../context/authContext.jsx";

const SingleProduct = () => {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const { productId } = useParams();
  const { validToken } = useAuth();

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleColorSelect = (colorId) => {
    setSelectedColor((prevSelectedColor) => (prevSelectedColor === colorId ? null : colorId));
  };

  const handleSizeSelect = (sizeId) => {
    setSelectedSize((prevSelectedSize) => (prevSelectedSize === sizeId ? null : sizeId));
  };


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/product/single-product/${productId}`);
        setProducts(response?.data?.product);
      } catch (error) {
        console.log('error while fetching products:', error.message);
      }
    };
    fetchProducts();
  }, [productId]);

  const product = productId;
  const color = selectedColor;
  const size = selectedSize;

  const createCart = async () => {
    try {
      await axios.post("http://localhost:8080/api/v1/cart/create-user-cart", { product, color, size, quantity }, {
        headers: {
          Authorization: validToken,
        },
      });
      alert("item added to cart");
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
                <div className="col-md-6 mb-6">
                  <div className="product-gallery product-gallery-sticky">
                    <div className="swiper-container product-single-swiper swiper-theme nav-inner" data-swiper-options={{
                      navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                      }
                    }}>
                      <div className="swiper-wrapper row cols-1 gutter-no">
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <img src={`/images/${products.image}`} data-zoom-image={`/images/${products.image}`} alt={`/images/${products.name}`} width={800} height={900} />
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <img src={`/images/${products.thumbImage1}`} data-zoom-image={`/images/${products.thumbImage1}`} alt={`/images/${products.name}`} width={488} height={549} />
                          </figure>
                        </div>
                        <div className="swiper-slide">
                          <figure className="product-image">
                            <img src={`/images/${products.thumbImage2}`} data-zoom-image={`/images/${products.thumbImage2}`} alt={`/images/${products.name}`} width={800} height={900} />
                          </figure>
                        </div>
                      </div>
                      <button className="swiper-button-next" />
                      <button className="swiper-button-prev" />
                      <Link to="#" className="product-gallery-btn product-image-full"><i className="w-icon-zoom" /></Link>
                    </div>
                    <div className="product-thumbs-wrap swiper-container" data-swiper-options={{
                      navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                      }
                    }}>
                      <div className="product-thumbs swiper-wrapper row cols-4 gutter-sm">
                        <div className="product-thumb swiper-slide">
                          <img src={`/images/${products.image}`} alt={`/images/${products.name}`} width={800} height={900} />
                        </div>
                        <div className="product-thumb swiper-slide">
                          <img src={`/images/${products.thumbImage1}`} alt={`/images/${products.name}`} width={800} height={900} />
                        </div>
                        <div className="product-thumb swiper-slide">
                          <img src={`/images/${products.thumbImage2}`} alt={`/images/${products.name}`} width={800} height={900} />
                        </div>
                        <div className="product-thumb swiper-slide">
                          <img src={`/images/${products.image}`} alt={`/images/${products.name}`} width={800} height={900} />
                        </div>
                      </div>
                      <button className="swiper-button-next" />
                      <button className="swiper-button-prev" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4 mb-md-6">
                  <div className="product-details" data-sticky-options="{'minWidth': 767}">
                    <h1 className="product-title">{products.name}</h1>
                    <div className="product-bm-wrapper">
                      <div className="product-meta">
                        <div className="product-categories">
                          Category:
                          <span className="product-category"><Link to="#">{products?.category?.name}</Link></span>
                        </div>
                        <div className="product-sku">
                          SKU: <span>{products.skuCode}</span>
                        </div>
                      </div>
                    </div>
                    <hr className="product-divider" />
                    <div className="product-price"><ins className="new-price">$ {products.salePrice}</ins></div>
                    <div className="ratings-container">
                      <div className="ratings-full">
                        <span className="ratings" style={{ width: '80%' }} />
                        <span className="tooltiptext tooltip-top" />
                      </div>
                      <Link to="#" className="rating-reviews scroll-to">({products.rating} Reviews)</Link>
                    </div>
                    <div className="product-short-desc">
                      <ul className="list-type-check list-style-none">
                        <li>{products.description}</li>
                        <li>{products.smallInfo}</li>
                      </ul>
                    </div>
                    <hr className="product-divider" />

                    <div className="product-form product-variation-form product-color-swatch">
                      <label>Color:</label>
                      <div className="d-flex align-items-center product-variations">
                        {
                          products?.color?.map((color) => {
                            return (
                              <Link key={color?._id}
                                to="#"
                                className={`color ${selectedColor === color._id ? 'active' : ''}`}
                                style={{ backgroundColor: color?.colorCode }}
                                onClick={() => handleColorSelect(color._id)} />
                            );
                          })
                        }
                      </div>
                    </div>

                    <div className="product-form product-variation-form product-size-swatch">
                      <label className="mb-1">Size:</label>
                      <div className="flex-wrap d-flex align-items-center product-variations">
                        {
                          products?.size?.map((size) => {
                            return (
                              <Link key={size?._id}
                                to="#"
                                className={`size ${selectedSize === size._id ? 'active' : ''}`}
                                onClick={() => handleSizeSelect(size._id)}>{size?.name}
                              </Link>
                            );
                          })
                        }
                      </div>
                    </div>
                    <div className="product-variation-price">
                      <span />
                    </div>
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
                          <Link href="#" className="social-icon social-facebook w-icon-facebook" />
                          <Link href="#" className="social-icon social-twitter w-icon-twitter" />
                          <Link href="#" className="social-icon social-pinterest fab fa-pinterest-p" />
                          <Link href="#" className="social-icon social-whatsapp fab fa-whatsapp" />
                          <Link href="#" className="social-icon social-youtube fab fa-linkedin-in" />
                        </div>
                      </div>
                      <span className="divider d-xs-show" />
                      <div className="product-link-wrapper d-flex">
                        <Link href="#" className="btn-product-icon btn-wishlist w-icon-heart"><span /></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <aside className="sidebar product-sidebar sidebar-fixed right-sidebar sticky-sidebar-wrapper">
              <div className="sidebar-overlay" />
              <Link className="sidebar-close" href="#"><i className="close-icon" /></Link>
              <Link href="#" className="sidebar-toggle d-flex d-lg-none"><i className="fas fa-chevron-left" /></Link>
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
                  {/* End of Widget Icon Box */}

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
                  {/* End of Widget Banner */}
                </div>
              </div>
            </aside>
            {/* End of Sidebar */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
