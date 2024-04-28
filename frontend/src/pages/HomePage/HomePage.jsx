import IconBox from "../../components/Banner/IconBox.jsx";
import Slider from "../../components/Slider/Slider.jsx";
import Category from "../../components/Category/Category.jsx";
import Department from "../../components/Department/Department.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import BottomHeader from "../../components/Header/BottomHeader.jsx";
import MiddleHeader from "../../components/Header/MiddleHeader.jsx";
import TopHeader from "../../components/Header/TopHeader.jsx";


const HomePage = () => {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
      <Slider />
      <IconBox />
      <Category />
      <Department />
      <Footer />
    </>
  );
};

export default HomePage;
