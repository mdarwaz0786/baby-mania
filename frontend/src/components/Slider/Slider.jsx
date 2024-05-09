import { Link } from "react-router-dom";
import kidsBanner from "../../assets/banner_kids.png";

const Slider = () => {
  return (
    <>
      <div className="container mt-5 mb-5">
        <Link to="/product"><img src={kidsBanner} alt="kidsbanner" style={{ cursor: "pointer" }} /></Link>
      </div>
    </>
  );
};

export default Slider;
