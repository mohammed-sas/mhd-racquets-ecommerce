import "./navbar.css";
import logo from "../../assets/ecomm-logo.png";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/auth-context";
import { Link } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import { useState } from "react";
import Search from "../search/Search";
const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useFilter();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const { currentUser, signout } = useAuth();
  const [searchResult, setSearchResult] = useState([]);
  const searchHandler = (e) => {
    // setSearchItem(e.target.value);
    let inputVal = e.target.value.toLowerCase();
    let result = state.data.filter(
      (item) =>
        item.title.toLowerCase().includes(inputVal) ||
        item.categoryName.toLowerCase().includes(inputVal)
    );
    if (inputVal.length > 0) setSearchResult(result);
    else setSearchResult([]);
  };
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
        <input type="text" placeholder="Search..." onChange={searchHandler} />
        <Search  list={searchResult} />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            {currentUser ? (
              `${currentUser.firstName}`
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
            <Link to={currentUser ? "/wishlist" : "/login"}>
              <div className="badge">
                <i className="far fa-heart grey bg-none"></i>
                <div className="badge-number">
                  {wishlistState.totalItems ? (
                    <span>{wishlistState.totalItems}</span>
                  ) : null}
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to={currentUser ? "/cart" : "/login"}>
              <div className="display-flex align-items">
                <div className="badge">
                  <i className="fas fa-shopping-cart bg-none grey"></i>
                  <div className="badge-number">
                    {cartState.cart.length ? (
                      <span>{cartState.cart.length}</span>
                    ) : null}
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
