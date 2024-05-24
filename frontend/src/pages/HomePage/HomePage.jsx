import Category from "../../components/Category/Category.jsx";
import Department from "../../components/Department/Department.jsx";
import OurProduct from "../../components/Product/OurProduct.jsx";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";

const HomePage = () => {
  return (
    <>
      <Carousel />
      <Category />
      <Department />
      <Testimonial />
      <OurProduct />
    </>
  );
};

export default HomePage;
