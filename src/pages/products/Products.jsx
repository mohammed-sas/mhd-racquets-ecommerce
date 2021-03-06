import { Filters, Rating, Tabs } from "../../components";
import {
  getRatings,
  getLowToHigh,
  getHighToLow,
  getMaxPrice,
  getCategoryWise,
} from "../../utils/util";
import classes from "./products.module.css";
import { useFilter, useAuth, useCart, useWishlist } from "../../context";
import { useNavigate, useLocation } from "react-router-dom";
import { SuccessAlert, InfoAlert } from "../../components";
import { useState } from "react";

const Products = () => {
  const { state } = useFilter();
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();
  const { addToCart, cartState } = useCart();
  const [apiCalled, setApiCalled] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [currentProd, setCurrentProd] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const itemsPerPage = 4;
  const { items, lowToHigh, highToLow, categories, maxPrice, rating } = state;
  const { wishlistState, addToWishlist, deleteFromWishlist } = useWishlist();
  let filteredItems = lowToHigh ? getLowToHigh(items) : items;
  filteredItems = highToLow ? getHighToLow(items) : items;
  filteredItems = getCategoryWise(filteredItems, categories);
  filteredItems = getMaxPrice(filteredItems, maxPrice);
  filteredItems = getRatings(filteredItems, rating);
  const pages = Math.floor(filteredItems.length / itemsPerPage);
  let startIndex = state.currentPageNumber * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  filteredItems = filteredItems.slice(startIndex, endIndex);

  const addToCartHandler = async (product) => {
    try {
      if (!currentUser) {
        navigate("/login", {
          state: {
            from: location,
          },
        });
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
      if (!currentUser) {
        navigate("/login", {
          state: {
            from: location,
          },
        });
        return;
      }
      let isExist = isProductWishlisted(product);
      setApiCalled(true);
      setProcessing(true);
      if (!isExist) {
        setAlertMessage("saving to wishlist");
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
      <Filters showFilter={showFilter} setShowFilter={setShowFilter} />
      <main>
        {state.loading ? <span className={classes["loader"]}></span> : null}
        <div className={classes["product-lists"]}>
          {filteredItems.map((product) => {
            return (
              <div
                key={product.id}
                className={`card-container ${classes["card-shadow"]} ${classes["card-height-50"]} product-container`}
              >
                <div className="card-image-basic product-image relative-pos">
                  <img src={product.image} alt="astrox 100 game" />
                  <span className={`btn-dismiss ${classes["card-shadow"]}`}>
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
                  <h2>???{product.price}</h2>
                </div>
                <div
                  className={`card-footer-basic product-card-footer ${classes["product-ecomm-footer"]} bg-purple-50`}
                >
                  <button
                    className={`btn btn-secondary ${classes["product-btn"]}`}
                    onClick={() => viewDetailHandler(product._id)}
                  >
                    View Details
                  </button>
                  <button
                    className={
                      "btn btn-primary " +
                      (processing &&
                        product._id === currentProd &&
                        "btn-disabled")
                    }
                    onClick={() => addToCartHandler(product)}
                    disabled={processing}
                  >
                    {isProductExist(product._id)}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {apiCalled && processing && <InfoAlert message={alertMessage} />}
        {apiCalled && !processing && <SuccessAlert message={alertMessage} />}
        <div className={classes["page-tabs"]}>
          {[...Array(pages)].map((val, index) => {
            return <Tabs key={index} pageNum={index + 1} />;
          })}
        </div>
      </main>

      <div
        className={classes["minimised-filter"]}
        onClick={() => setShowFilter(!showFilter)}
      >
        <span>Filter</span>
        <i className="fas fa-chevron-circle-up"></i>
      </div>
    </main>
  );
};

export default Products;
