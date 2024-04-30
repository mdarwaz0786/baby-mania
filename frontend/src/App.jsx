import { Routes, Route } from "react-router-dom";
import Test from "./Test.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProductPage from './pages/ProductPage/ProductPage.jsx';
import SingleProduct from "./components/Product/SingleProduct.jsx";
import Product from './components/Product/Product';
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import WishlistPage from "./pages/WishlistPage/WishlistPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Logout from "./components/Login/Logout.jsx";
import MyAccount from "./MyAccount.jsx";
import AdminPage from "./pages/AdminPage/AdminPage.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";
import AllOrder from "./components/Admin/Order/AllOrder.jsx";
import ConfirmOrder from "./components/Admin/Order/ConfirmOrder.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/product" element={<ProductPage />}>
          <Route path="" element={<Product />} />
          <Route path="single-product/:productId" element={<SingleProduct />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} >
          <Route path="" element={<Dashboard />} />
          <Route path="all-order" element={<AllOrder />} />
          <Route path="confirm-order" element={<ConfirmOrder />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
