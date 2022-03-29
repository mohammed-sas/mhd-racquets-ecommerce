import Filters from "../../components/filters/Filters";
import Rating from "../../components/rating/Rating";
import {
  getRatings,
  getLowToHigh,
  getHighToLow,
  getMaxPrice,
  getCategoryWise,
} from "../../utils/util";

import classes from "./products.module.css";
import { useFilter } from "../../context/filter-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";
import SuccessAlert from "../../components/Alerts/Success/SuccessAlert";
import InfoAlert from "../../components/Alerts/Info/InfoAlert";
import { useState } from "react";

const Products = () => {
  const { state } = useFilter();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { addToCart, cartState } = useCart();
  const [apiCalled,setApiCalled] = useState(false);
  const [processing,setProcessing] = useState(false);
  const [alertMessage,setAlertMessage] = useState("");
  const [currentProd,setCurrentProd] = useState(null);
  const [showFilter,setShowFilter] = useState(false);
  const {
    items,
    lowToHigh,
    highToLow,
    categories,
    maxPrice,
    rating,
  } = state;
  const { wishlistState, addToWishlist, deleteFromWishlist } = useWishlist();
  let filteredItems = lowToHigh ? getLowToHigh(items) : items;
  filteredItems = highToLow ? getHighToLow(items) : items;
  filteredItems = getCategoryWise(filteredItems, categories);
  filteredItems = getMaxPrice(filteredItems, maxPrice);
  filteredItems = getRatings(filteredItems, rating);

  const addToCartHandler = async (product) => {
    try {

      if (!currentUser) {
        navigate("/login");
      } else {
        let result = isProductExist(product._id);

        if (result === "Go to cart") {
          navigate("/cart");
          return;
        }
        setCurrentProd(product._id);
        setApiCalled(true);
        setProcessing(true);
        setAlertMessage("adding to cart");
        await addToCart(product);
        setProcessing(false);
        setAlertMessage("added to cart");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isProductExist = (id) => {
    let isExist = cartState.cart.find((item) => item._id === id);

    return isExist ? "Go to cart" : "Add to Cart";
  };

  const wishlistHandler = async (product) => {
    try {
      let isExist = isProductWishlisted(product);
      setApiCalled(true);
      setProcessing(true);
      if (!isExist) {
        setAlertMessage("saving to wishlist")
        await addToWishlist(product);
        setProcessing(false);
        setAlertMessage("saved to wishlist");
      } else {
        setAlertMessage("removing from wishlist");
        await deleteFromWishlist(product._id);
        setProcessing(false);
        setAlertMessage("removed from wishlist");
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const isProductWishlisted = (product) => {
    let result = wishlistState.wishlist.find(
      (item) => item._id === product._id
    );
    return result ? "wishlist-active" : "";
  };

  const viewDetailHandler = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <main className={classes["product-page-container"]}>
      <Filters  showFilter={showFilter} setShowFilter={setShowFilter}/>
      <main>
        {state.loading ? <span className={classes["loader"]}></span> : null}
        {filteredItems.map((product) => {
          return (
            <div key={product.id} className={`card-container ${classes["card-shadow"]} product-container`}>
              <div className="card-image-basic product-image relative-pos">
                <img src={product.image} alt="astrox 100 game" />
                <span className="btn-dismiss">
                  <i
                    className={"fas fa-heart " + isProductWishlisted(product)}
                    onClick={() => wishlistHandler(product)}
                  ></i>
                </span>
              </div>
              <div className="card-heading bg-purple-50">
                <div className="padding-l-r-16-b-5 heading bg-purple-50">
                  {product.title}
                </div>
                <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                  {product.brand}
                </div>
              </div>
              <Rating rating={product.rating} />
              <div className="product-price padding-l-r-16-b-5  bg-purple-50">
                <h2>₹{product.price}</h2>
              </div>
              <div className={`card-footer-basic product-card-footer ${classes["fluid-y"]} bg-purple-50`}>
                <button
                  className={`btn btn-secondary ${classes["product-btn"]}`}
                  onClick={() => viewDetailHandler(product._id)}
                >
                  View Details
                </button>
                <button
                  className={"btn btn-primary "+((processing && product._id === currentProd) && "btn-disabled")}
                  onClick={() => addToCartHandler(product)}
                  disabled={processing}

                >
                  {isProductExist(product._id)}
                </button>
              </div>
            </div>
          );
        })}
        {(apiCalled&&processing) && <InfoAlert message={alertMessage}/>}
        {(apiCalled&&!processing) && <SuccessAlert message={alertMessage}/>}
      
      </main>
      <div className={classes["minimised-filter"]} onClick={()=>setShowFilter(!showFilter)}>
        <span>Filter</span><i class="fas fa-chevron-circle-up"></i>
      </div>
    </main>
  );
};

export default Products;
