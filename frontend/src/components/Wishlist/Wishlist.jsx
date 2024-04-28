const Wishlist = () => {
  return (
    <>
      {/* Start of Main */}
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
              <li><a href="/">Home</a></li>
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
                  <th className="product-price"><span style={{ marginRight: "15rem" }}>Price</span></th>
                  <th className="product-stock-status"><span style={{ marginRight: "20rem" }}>Stock</span></th>
                  <th className="wishlist-action"><span style={{ marginRight: "22rem" }}>Action</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-thumbnail">
                    <div className="p-relative">
                      <a href="product-default.html">
                        <figure>
                          <img src="assets/images/shop/7-1.jpg" alt="product" width={300} height={338} />
                        </figure>
                      </a>
                      <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
                    </div>
                  </td>
                  <td className="product-name">
                    <a href="product-default.html">
                      Blue Sky Trunk
                    </a>
                  </td>
                  <td className="product-price">
                    <ins className="new-price">$85.00</ins>
                  </td>
                  <td className="product-stock-status">
                    <span className="wishlist-in-stock">In Stock</span>
                  </td>
                  <td className="wishlist-action">
                    <div className="d-lg-flex">
                      <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                        cart</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="product-thumbnail">
                    <div className="p-relative">
                      <a href="product-default.html">
                        <figure>
                          <img src="assets/images/shop/19-1.jpg" alt="product" width={300} height={338} />
                        </figure>
                      </a>
                      <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
                    </div>
                  </td>
                  <td className="product-name">
                    <a href="product-default.html">
                      Handmade Ring
                    </a>
                  </td>
                  <td className="product-price"><ins className="new-price">$5.00</ins></td>
                  <td className="product-stock-status">
                    <span className="wishlist-in-stock">In Stock</span>
                  </td>
                  <td className="wishlist-action">
                    <div className="d-lg-flex">
                      <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                        cart</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="product-thumbnail">
                    <div className="p-relative">
                      <a href="product-default.html">
                        <figure>
                          <img src="assets/images/shop/20.jpg" alt="product" width={300} height={338} />
                        </figure>
                      </a>
                      <button type="submit" className="btn btn-close"><i className="fas fa-times" /></button>
                    </div>
                  </td>
                  <td className="product-name">
                    <a href="product-default.html">
                      Pencil Case
                    </a>
                  </td>
                  <td className="product-price"><ins className="new-price">$54.00</ins></td>
                  <td className="product-stock-status">
                    <span className="wishlist-in-stock">In Stock</span>
                  </td>
                  <td className="wishlist-action">
                    <div className="d-lg-flex">
                      <a href="#" className="btn btn-dark btn-rounded btn-sm ml-lg-2 btn-cart">Add to
                        cart</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* End of PageContent */}
      </main>
      {/* End of Main */}

    </>
  );
};

export default Wishlist;
