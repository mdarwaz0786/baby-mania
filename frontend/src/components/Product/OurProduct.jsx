import "../../App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const OurProduct = () => {
  const [products, setProducts] = useState([]);
  const [totalProduct, setTotalProduct] = useState();
  const [filters, setFilters] = useState({
    sort: "relevance",
    page: 1,
    limit: 12,
  });

  const handlePageChange = (page) => {
    setFilters((prevFilters) => ({ ...prevFilters, page }));
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/v1/product/all-product", {
          params: filters,
        });
        setProducts(response?.data?.product);
        setTotalProduct(response?.data?.totalCount);
      } catch (error) {
        console.error("error while fetching products:", error.message);
      }
    };

    fetchProducts();
  }, [filters]);

  return (
    <>
      <h3 className="text-center mb-5 mt-10">Our Product</h3>
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

        <nav className="toolbox toolbox-pagination justify-content-between">
          <p className="showing-info">
            Showing <span>{((filters.page - 1) * filters.limit) + 1}</span> - <span>{((filters.page - 1) * filters.limit) + products?.length}</span>out of <span>{totalProduct}</span> Products
          </p>
          <ul className="pagination">
            <li className={`prev ${filters.page === 1 ? 'disabled' : ''}`}>
              <Link to="#" onClick={() => handlePageChange(filters.page - 1)} aria-label="Previous">
                <i className="w-icon-long-arrow-left" />Prev
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="#">{filters.page}</Link>
            </li>
            <li className="next">
              <Link to="#" onClick={() => handlePageChange(filters.page + 1)} aria-label="Next">
                Next<i className="w-icon-long-arrow-right" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default OurProduct;
