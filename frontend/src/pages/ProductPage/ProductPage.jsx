import { Outlet } from "react-router-dom";
import Footer from '../../components/Footer/Footer.jsx';

const ProductPage = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default ProductPage;
