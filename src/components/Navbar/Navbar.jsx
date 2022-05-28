import classes from "./navbar.module.css";
import logo from "../../assets/ecomm-logo.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useWishlist, useCart, useFilter, useAuth } from "../../context";
import { useState } from "react";
import Search from "../search/Search";
const Navbar = () => {
  const navigate = useNavigate();
  const { state } = useFilter();
  const { wishlistState } = useWishlist();
  const { cartState } = useCart();
  const { currentUser, signout } = useAuth();
  const [searchResult, setSearchResult] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [hideSearchRes,setHideSearch]=useState(false);
  const [searchString,setSearchString] = useState("");
  const searchHandler = (e) => {
    setSearchString(e.target.value);
    let inputVal = e.target.value.toLowerCase().trim();
    setHideSearch(false);
    let inputLen = inputVal.length;
    let result = state.data.filter(
      (item) =>
        item.title.toLowerCase().substring(0, inputLen).includes(inputVal) ||
        item.categoryName
          .toLowerCase()
          .substring(0, inputLen)
          .includes(inputVal) ||
        item.brand.toLowerCase().substring(0, inputLen).includes(inputVal)
    );
    if (inputVal.length > 0) {
      result.length > 0
        ? setSearchResult(result)
        : setSearchResult([{ id: 0, title: "Not found" }]);
    } else setSearchResult([]);
  };
  return (
    <nav className={`nav-bar ${classes["bg-white"]}`}>
      <div
        className={classes["hamburger-icon"]}
        onClick={() => setShowSidebar(true)}
      >
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
        <input
          type="text"
          placeholder="Search products,brands and more"
          onChange={searchHandler}
          value={searchString}
        />

       {!hideSearchRes && <Search list={searchResult} setSearchString={setSearchString} setSearchResult={setSearchResult}/>}
      </div>
      <div
        className={`nav-links ${classes["nav-links"]} ${
          classes["nav-links-ecomm"]
        } ${showSidebar && classes["active"]}`}
      >
        <ul>
          {showSidebar && (
            <li>
              <i
                class="fas fa-times "
                onClick={() => setShowSidebar(false)}
              ></i>
            </li>
          )}
          <li onClick={() => setShowSidebar(false)}>
            {currentUser ? (
              <span onClick={() => navigate("/profile/address")}>
                {currentUser.firstName}
              </span>
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            )}
          </li>
          <li onClick={() => setShowSidebar(false)}>
            <Link to={currentUser ? "/wishlist" : "/login"}>
              <div className="badge">
                <i
                  className={`far fa-heart ${classes["grey"]} ${classes["bg-none"]}`}
                ></i>
                <div className="badge-number">
                  {wishlistState.totalItems ? (
                    <span>{wishlistState.totalItems}</span>
                  ) : null}
                </div>
              </div>
            </Link>
          </li>
          <li onClick={() => setShowSidebar(false)}>
            <Link to={currentUser ? "/cart" : "/login"}>
              <div className="display-flex align-items">
                <div className="badge">
                  <i
                    className={`fas fa-shopping-cart ${classes["grey"]} ${classes["bg-none"]}`}
                  ></i>
                  <div className="badge-number">
                    {cartState.cart.length ? (
                      <span>{cartState.cart.length}</span>
                    ) : null}
                  </div>
                </div>
                <p className={`${classes["grey"]} ${classes["bg-none"]}`}>
                  Cart
                </p>
              </div>
            </Link>
          </li>
          {currentUser ? (
            <li onClick={() => setShowSidebar(false)}>
              <button className="btn btn-secondary" onClick={signout}>
                Logout
              </button>
            </li>
          ) : null}
        </ul>
      </div>
      {(searchResult.length > 0 && !hideSearchRes)&& (
        <div className={classes["search-backdrop"]} onClick={()=>setHideSearch(true)}></div>
      )}{" "}
    </nav>
  );
};

export default Navbar;
