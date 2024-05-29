import { useState, useEffect } from "react";
import { useAuth } from "../../context/authContext.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Setting = () => {
  const { user } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setMobile(user.mobile);
      setPassword(user.password);
    }
  }, [user]);

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    try {
      if (!name || !email || !mobile || !password) {
        return toast.error("Enter all details");
      }

      const response = await axios.put(`/api/v1/user/update-user/${id}`, {
        name,
        email,
        mobile,
        password,
      });
      if (response?.data?.success) {
        toast.success("Updated successfully");
      }
    } catch (error) {
      console.log("Error while updating:", error.message);
      toast.error("Error while updating");
    }
  };

  return (
    <>
      <div
        className="container"
        style={{ marginTop: "2rem", marginBottom: "1rem" }}
      >
        <div className="card shadow p-5">
          <div
            className="mb-5"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <h5 className="card-title">Admin Detail</h5>
            <button className="btn btn-primary" onClick={() => navigate(-1)}>
              Back
            </button>
          </div>

          <form>
            <div className="row g-5">
              <div className="col mb-5">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  aria-label="name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="col mb-5">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  aria-label="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row g-5">
              <div className="col">
                <label htmlFor="mobile" className="form-label">
                  Mobile
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Mobile"
                  aria-label="mobile"
                  name="mobile"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <div className="col mb-5">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Password"
                  aria-label="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => handleUpdate(e, user?._id)}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Setting;
