import IconBox from "../../components/Banner/IconBox.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Category from "../../components/Category/Category.jsx";
import Department from "../../components/Department/Department.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const HomePage = () => {
  return (
    <>
      <Slider />
      <IconBox />
      <Category />
      <Department />
      <Footer />
    </>
  );
};

export default HomePage;
