import Navbar from "../../components/Navbar/Navbar";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/auth-context";
const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "mohammed@gmail.com",
    password: "password",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      let status = await signin(user);
      if (status) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <main className="login-container">
        <div className="login-form-container bg-white ">
          <h2 className="centered-text grey">Login</h2>
          <form action="post" className="login-form" onSubmit={submitHandler}>
            <label htmlFor="email">
              Email address
              <br />{" "}
              <input
                id="email"
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="abc@neog.com"
                defaultValue="mohammed@gmail.com"
              />
            </label>

            <label htmlFor="password">
              Password
              <br />{" "}
              <input
                type="text"
                name="password"
                onChange={handleChange}
                placeholder="*******"
                defaultValue="password"
              />
            </label>

            <div className="remember-me-container">
              <label htmlFor="remember-me">
                <input id="remember-me" type="checkbox" /> Remember me
              </label>
              <span>
                <a href="">Forgot Your Password?</a>
              </span>
            </div>
            <input type="submit" value="Login" className="btn btn-primary" />
            <div>
              <p className="centered-text">
                <Link to="/signup">
                  Create New Account <i className="fas fa-chevron-right"></i>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
