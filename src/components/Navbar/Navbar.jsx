import classes from "./navbar.module.css";
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
    let inputVal = e.target.value.toLowerCase().trim();
    let inputLen =inputVal.length;
    let result = state.data.filter(
      (item) =>
        item.title.toLowerCase().substring(0,inputLen).includes(inputVal) ||
        item.categoryName.toLowerCase().substring(0,inputLen).includes(inputVal)||
        item.brand.toLowerCase().substring(0,inputLen).includes(inputVal)
    );
    if (inputVal.length > 0) {
      result.length>0 ? setSearchResult(result) : setSearchResult([{id:0,title:"Not found"}]);
    } else setSearchResult([]);
  };
  return (
    <nav className={`nav-bar ${classes["bg-white"]}`}>
      <div className={classes["hamburger-icon"]}>
        <i className="fas fa-bars"></i>
      </div>
      <Link to="/">
        <div className="nav-brand">
          <img src={logo} alt="logo" />
          <div className={classes["nav-brand-typography"]}>
            <h3 className="grey">MHD</h3>
            <h4 className="grey">Racquets</h4>
          </div>
        </div>
      </Link>
      <div className={`search-bar ${classes["nav-search-bar"]}`}>
        <i className={`fas fa-search ${classes["grey"]}`}></i>
        <input type="text" placeholder="Search products,brands and more" onChange={searchHandler} />
        <Search list={searchResult} />
      </div>
      <div className={`nav-links ${classes["nav-links"]} ${classes["nav-links-ecomm"]}`}>
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
                <i className={`far fa-heart ${classes["grey"]} ${classes["bg-none"]}`}></i>
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
                  <i className={`fas fa-shopping-cart ${classes["grey"]} ${classes["bg-none"]}`}></i>
                  <div className="badge-number">
                    {cartState.cart.length ? (
                      <span>{cartState.cart.length}</span>
                    ) : null}
                  </div>
                </div>
                <p className={`${classes["grey"]} ${classes["bg-none"]}`}>Cart</p>
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
