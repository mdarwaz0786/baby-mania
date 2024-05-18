import { useEffect } from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  useEffect(() => {
    const scrollOptions = {
      top: 0,
      behavior: 'smooth'
    };
    window.scrollTo(scrollOptions);
  }, []);

  return (
    <>
      <main className="main wishlist-page">
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Wishlist</h1>
          </div>
        </div>

        <nav className="breadcrumb-nav mb-10">
          <div className="container">
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Wishlist</li>
            </ul>
          </div>
        </nav>

        <div className="page-content">
          <div className="container">
            <h3 className="wishlist-title">My wishlist</h3>
            <table className="shop-table wishlist-table">
              <thead>
                <tr>
                  <th className="product-name"><span>Product</span></th>
                  <th />
                  <th className="product-price"><span style={{ marginRight: "16rem" }}>Price</span></th>
                  <th className="product-stock-status"><span style={{ marginRight: "20rem" }}>Stock</span></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="product-thumbnail">
                    <div className="p-relative">
                      <Link to="#">
                        <figure>
                          <img src="#" alt="product" width={300} height={338} />
                        </figure>
                      </Link>
                      <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
                    </div>
                  </td>

                  <td className="product-name">
                    <Link to="#">Blue Sky Trunk</Link>
                  </td>

                  <td className="product-price">
                    <ins className="new-price">₹85.00</ins>
                  </td>

                  <td className="product-stock-status">
                    <span className="wishlist-in-stock">In Stock</span>
                  </td>
                </tr>

                <tr>
                  <td className="product-thumbnail">
                    <div className="p-relative">
                      <Link to="#">
                        <figure>
                          <img src="#" alt="product" width={300} height={338} />
                        </figure>
                      </Link>
                      <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
                    </div>
                  </td>

                  <td className="product-name">
                    <Link to="#">Handmade Ring</Link>
                  </td>

                  <td className="product-price"><ins className="new-price">₹5.00</ins></td>
                  <td className="product-stock-status">
                    <span className="wishlist-in-stock">In Stock</span>
                  </td>
                </tr>

                <tr>
                  <td className="product-thumbnail">
                    <div className="p-relative">
                      <Link to="#">
                        <figure>
                          <img src="#" alt="product" width={300} height={338} />
                        </figure>
                      </Link>
                      <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
                    </div>
                  </td>

                  <td className="product-name">
                    <Link to="#">Pencil Case</Link>
                  </td>

                  <td className="product-price"><ins className="new-price">₹54.00</ins></td>
                  <td className="product-stock-status">
                    <span className="wishlist-in-stock">In Stock</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
};

export default Wishlist;
