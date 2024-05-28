import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditCoupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const [type, setType] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const fetchSingleCoupon = async (id) => {
    try {
      const response = await axios.get(`/api/v1/coupon/single-coupon/${id}`);
      setCouponCode(response?.data?.coupon?.couponCode);
      setType(response?.data?.coupon?.type);
      setAmount(response?.data?.coupon?.amount);
      setStatus(response?.data?.coupon?.status);
    } catch (error) {
      console.log("Error while fetching single coupon:", error.message);
    }
  };

  useEffect(() => {
    fetchSingleCoupon(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!couponCode || !type || !amount || !status) {
        return toast.error("Enter all detail");
      }

      const response = await axios.put(`/api/v1/coupon/update-coupon/${id}`, {
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
        toast.success("coupon updated successfully");
      }
    } catch (error) {
      console.log("Error while updating coupon:", error.message);
      toast.error("error while updating coupon");
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
          <h5 className="card-title">Edit Coupon</h5>
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
                type="number"
                className="form-control"
                placeholder="amount"
                aria-label="amount"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>

            <div className="col mb-5">
              <label htmlFor="type" className="form-label">
                Type
              </label>
              <select
                className="form-select"
                aria-label="type"
                name="type"
                id="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
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
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCoupon;
