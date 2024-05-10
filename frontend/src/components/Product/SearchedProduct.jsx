import { Link, useLocation } from "react-router-dom";
import bannerWomen from "../../assets/banner_women.png";
import { useEffect } from "react";

const SearchedProduct = () => {
  const location = useLocation();
  const { products } = location.state || [];

  useEffect(() => {
    const handleScrollToBottom = () => {
      window.scrollTo(0, window.innerHeight * 0.7);
    };
    handleScrollToBottom();
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <Link to="/"><img src={bannerWomen} alt="banner-women" style={{ cursor: "pointer" }} /></Link>
      </div>

      <h3 className="text-center mt-5 mb-5">Our Product</h3>
      <div className="container">
        <div className="row cols-xl-5 cols-md-4 cols-sm-3 cols-2">
          {
            products?.map((product) => (
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
            ))
          }
        </div>
      </div>
    </>
  );
};

export default SearchedProduct;
