/* eslint-disable react-hooks/exhaustive-deps */
import Slider from "../../components/Slider/Slider.jsx";
import Category from "../../components/Category/Category.jsx";
import Department from "../../components/Department/Department.jsx";


const HomePage = () => {
  return (
    <>
      <Slider />
      <Category />
      <Department />
    </>
  );
};

export default HomePage;
