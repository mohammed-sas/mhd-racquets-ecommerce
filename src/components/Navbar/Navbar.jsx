import "./navbar.css";
import logo from "../../assets/ecomm-logo.png";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-context";
const Navbar = () => {
  const navigate = useNavigate();
  const {cartState} = useCart();
  const { currentUser, signout } = useAuth();
  return (
    <nav className="nav-bar bg-white">
      <div className="hamburger-icon">
        <i className="fas fa-bars"></i>
      </div>
      <Link to="/">
        <div className="nav-brand">
          <img src={logo} alt="logo" />
          <div className="nav-brand-typography">
            <h3 className="grey">MHD</h3>
            <h4 className="grey">Racquets</h4>
          </div>
        </div>
      </Link>
      <div className="search-bar">
        <i className="fas fa-search grey"></i>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            {currentUser ? (
              `${currentUser.fname}`
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </li>
          <li>
            <div className="badge">
              <i className="far fa-heart grey bg-none"></i>
              <div className="badge-number">
                <span>5</span>
              </div>
            </div>
          </li>
          <li>
            <Link to="/cart">
            <div className="display-flex align-items">
              <div className="badge">
                <i className="fas fa-shopping-cart bg-none grey"></i>
                <div className="badge-number">
                  {cartState.cart.length? <span>{cartState.cart.length}</span>:null}
                </div>
              </div>
              <p className="bg-none grey">Cart</p>
            </div>
            </Link>
          </li>
          {currentUser ? (
            <li>
              <button className="btn btn-secondary" onClick={signout}>
                Logout
              </button>
            </li>
          ) : null}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
