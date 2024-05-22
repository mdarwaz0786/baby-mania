import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from "../../context/authContext.jsx";
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { storeToken } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/v1/user/login-user", { email, password });
      if (response?.data?.success) {
        storeToken(response.data.token);
        setEmail("");
        setPassword("");
        toast.success("login successful");
        navigate('/admin');
        window.location.reload();
      }
    } catch (error) {
      console.log("Error while log in user:", error.message);
      toast.error("invalid credential");
    }
  };

  return (
    <>
      <div className="min-h-100 p-0 p-sm-6 d-flex align-items-stretch">
        <div className="card w-25x flex-grow-1 flex-sm-grow-0 m-sm-auto">
          <div className="card-body p-sm-5 m-sm-3 flex-grow-0">
            <h1 className="mb-5 fs-3">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  name="email"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                <button type="submit" className="btn btn-primary btn-lg w-100">Log In</button>
              </div>
            </form>
          </div>
          <div className="card-body p-sm-5 m-sm-3 flex-grow-0" >
            <div className="form-group text-center text-muted" style={{ paddingTop: "0" }}>
              New User Register Here? <Link to="/auth/signup">Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
