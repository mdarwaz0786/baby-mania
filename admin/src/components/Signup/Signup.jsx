import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../../context/authContext.jsx";
import { useState } from "react";
import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();
  const { storeToken } = useAuth();

  const handleRegisteration = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/user/register-user", { name, email, password, mobile });
      if (response?.data?.success) {
        storeToken(response.data.token);
        setName("");
        setEmail("");
        setMobile("");
        setPassword("");
        toast.success("registration successful");
        navigate('/admin');
        window.location.reload();
      }
    } catch (error) {
      console.log("error while registering user:", error.message);
      toast.error("error while registration");
    }
  };

  return (
    <>
      <div className="min-h-100 p-0 p-sm-6 d-flex align-items-stretch">
        <div className="card w-25x flex-grow-1 flex-sm-grow-0 m-sm-auto">
          <div className="card-body p-sm-5 m-sm-3 flex-grow-0">
            <h1 className="mb-5 fs-3">Signup</h1>
            <form onSubmit={handleRegisteration}>
              <div className="mb-4">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="name"
                  id="name"
                  placeholder="Enter name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="email"
                  placeholder="Enter Email Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Mobile</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  name="mobile"
                  id="mobile"
                  placeholder="Enter Mobile Number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Sign Up</button>
              </div>
            </form>
          </div>
          <div className="card-body p-sm-5 m-sm-3 flex-grow-0">
            <div className="form-group text-center text-muted" style={{ paddingTop: "0" }}>
              Already have an account? <Link to="/auth/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
