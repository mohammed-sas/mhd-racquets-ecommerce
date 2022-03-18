import Navbar from "../../components/Navbar/Navbar";
import Filters from "../../components/filters/Filters";
import Rating from "../../components/rating/Rating";
import {
  getRatings,
  getLowToHigh,
  getHighToLow,
  getMaxPrice,
  getCategoryWise,
} from "../../utils/util";

import "./products.css";
import { useFilter } from "../../context/filter-context";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
import { useWishlist } from "../../context/wishlist-context";

const Products = () => {
  const { state } = useFilter();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { addToCart, cartState } = useCart();
  const { items, lowToHigh, highToLow, categories, maxPrice, rating } = state;
  const { wishlistState, addToWishlist,deleteFromWishlist } = useWishlist();
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
        await addToCart(product);
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
      if (!isExist) {
        await addToWishlist(product);
      } else {
        await deleteFromWishlist(product._id);
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
  return (
    <div className="product-page-container">
      <Navbar />
      <Filters />
      <main>
        {state.loading ? <h2>Loading...</h2> : null}
        {filteredItems.map((product) => {
          return (
            <div key={product.id} className="card-container product-container">
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
              <div className="card-footer-basic product-card-footer fluid-x bg-purple-50">
                <button
                  className="btn btn-primary"
                  onClick={() => addToCartHandler(product)}
                >
                  {isProductExist(product._id)}
                </button>
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default Products;
