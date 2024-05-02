import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <>
      <main className="main wishlist-page">
        {/* Start of Page Header */}
        <div className="page-header">
          <div className="container">
            <h1 className="page-title mb-0">Wishlist</h1>
          </div>
        </div>
        {/* End of Page Header */}

        {/* Start of Breadcrumb */}
        <nav className="breadcrumb-nav mb-10">
          <div className="container">
            <ul className="breadcrumb">
              <li><Link to="/">Home</Link></li>
              <li>Wishlist</li>
            </ul>
          </div>
        </nav>
        {/* End of Breadcrumb */}

        {/* Start of PageContent */}
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
                          <img src="assets/images/shop/7-1.jpg" alt="product" width={300} height={338} />
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
                          <img src="assets/images/shop/19-1.jpg" alt="product" width={300} height={338} />
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
                          <img src="assets/images/shop/20.jpg" alt="product" width={300} height={338} />
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
        {/* End of PageContent */}
      </main>
    </>
  );
};

export default Wishlist;
