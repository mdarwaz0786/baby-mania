import TopHeader from "../../components/Header/TopHeader.jsx";
import MiddleHeader from "../../components/Header/MiddleHeader.jsx";
import BottomHeader from "../../components/Header/BottomHeader.jsx";
import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer/Footer.jsx';

const ProductPage = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProductPage;
