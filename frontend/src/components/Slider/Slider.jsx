import { useEffect } from "react";
import kidsBanner from "../../assets/banner_kids.png";

const Slider = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container mt-5 mb-5">
        <img src={kidsBanner} alt="kidsbanner" />
      </div>
    </>
  );
};

export default Slider;
