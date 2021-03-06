import "./login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context";
const Login = () => {
  const { signin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({
    email: "",
    password: "",
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
      let status =await signin(user);
      if(status===200)
      navigate(location?.state?.from?.pathname || "/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  const guestHandler =  () => {
  
      let guestUser = {
        email: "mohammed@gmail.com",
        password: "password",
      };
     setUser(guestUser);
  };
  return (
    <div>
      <main className="login-container">
        <div className="login-form-container bg-white ">
          <h2 className="centered-text grey">Login</h2>
          <form action="post" className="login-form" onSubmit={submitHandler}>
            <label htmlFor="email">
              <span>Email address</span>
              <input
                id="email"
                onChange={handleChange}
                name="email"
                type="email"
                defaultValue={user.email}
                placeholder="abc@neog.com"
                required
              />
            </label>

            <label htmlFor="password">
              <span>Password</span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="*******"
                defaultValue={user.password}
                required
              />
            </label>

            <div className="remember-me-container">
              <label htmlFor="remember-me">
                <input id="remember-me" type="checkbox" /> Remember me
              </label>
              <span>
                <a>Forgot Your Password?</a>
              </span>
            </div>
            <input type="submit" value="Login" className="btn btn-primary" />
            <input className="btn btn-secondary" type="button" value="Login as guest" onClick={guestHandler}/>
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
