import { Routes, Route } from "react-router-dom";
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
import TopHeader from "./components/Header/TopHeader.jsx";
import MiddleHeader from "./components/Header/MiddleHeader.jsx";
import BottomHeader from "./components/Header/BottomHeader.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Test from "./Test.jsx";
import Success from "./Success.jsx";
import Cancel from "./Cancel.jsx";

const App = () => {

  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <Routes>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/product" element={<ProductPage />}>
          <Route path="" element={<Product />} />
          <Route path="single-product/:productId" element={<SingleProduct />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
