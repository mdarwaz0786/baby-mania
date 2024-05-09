/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "../../components/Slider/Slider.jsx";
import Category from "../../components/Category/Category.jsx";
import Department from "../../components/Department/Department.jsx";
import OurProduct from "../../components/Product/OurProduct.jsx";


const HomePage = () => {
  return (
    <>
      <Slider />
      <Category />
      <Department />
      <OurProduct />
    </>
  );
};

export default HomePage;
