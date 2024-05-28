import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!couponCode || !type || !amount || !status) {
        return toast.error("Enter all detail");
      }

      const response = await axios.post("/api/v1/coupon/create-coupon", {
        couponCode,
        type,
        amount,
        status,
      });

      if (response?.data?.success) {
        setCouponCode("");
        setType("");
        setAmount("");
        setStatus("");
        toast.success("coupon added successfully");
      }
    } catch (error) {
      console.log("Error while adding coupon:", error.message);
      toast.error("error while adding coupon");
    }
  };

  return (
    <div
      className="container"
      style={{ marginTop: "2rem", marginBottom: "1rem" }}
    >
      <div className="card shadow p-4">
        <div
          className="mb-5"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <h5 className="card-title">Add Coupon</h5>
          <button className="btn btn-primary" onClick={() => navigate(-1)}>
            back
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="couponCode" className="form-label">
                Coupon Code
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter coupon code"
                aria-label="couponCode"
                name="couponCode"
                id="couponCode"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
              />
            </div>

            <div className="col mb-5">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select
                className="form-select"
                aria-label="Status"
                name="status"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                placeholder="Select status"
              >
                <option value="" disabled selected>
                  -- Select Status --
                </option>
                <option value="Show">Show</option>
                <option value="Hide">Hide</option>
              </select>
            </div>
          </div>

          <div className="row g-5">
            <div className="col mb-5">
              <label htmlFor="amount" className="form-label">
                Amount/Percentage
              </label>
              <input
                type="Number"
                className="form-control"
                placeholder="Enter amount/percentage"
                aria-label="amount"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="col mb-5">
              <label htmlFor="status" className="form-label">
                Type
              </label>
              <select
                className="form-select"
                aria-label="Status"
                name="status"
                id="status"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Select Type"
              >
                <option value="" disabled selected>
                  -- Select Type --
                </option>
                <option value="Percentage">Percentage</option>
                <option value="Amount">Amount</option>
              </select>
            </div>
          </div>

          <div className="text-center mt-4">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
