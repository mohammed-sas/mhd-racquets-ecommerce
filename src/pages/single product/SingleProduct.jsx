import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./singleProduct.module.css";
import axios from "axios";
import { useWishlist,useAuth,useCart } from "../../context";
import {SuccessAlert,InfoAlert,Rating} from "../../components";
const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { wishlistState, addToWishlist, deleteFromWishlist } = useWishlist();
  const { currentUser } = useAuth();
  const { cartState, addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [apiCalled,setApiCalled] = useState(false);
  const [processing,setProcessing] = useState(false);
  const [alertMessage,setAlertMessage] = useState("");
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        let response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.product);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const wishlistHandler = async (id) => {
    try {
      if (!currentUser) {
        navigate("/login");
        return;
      }
      let isExist = isProductWishlisted(id);
      if (!isExist) {
        setApiCalled(true);
        setProcessing(true);
        setAlertMessage("adding to wishlist");
        await addToWishlist(product);
        setProcessing(false);
        setAlertMessage("added to wishlist")
      } else {
        setApiCalled(true);
        setProcessing(true);
        setAlertMessage("removing from wishlist");
        await deleteFromWishlist(product._id);
        setProcessing(false);
        setAlertMessage("removed from wishlist")
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isProductWishlisted = (id) => {
    let result = wishlistState.wishlist.find((item) => item._id == id);
    return result ? true : false;
  };

  const addToCartHandler = async (product) => {
    try {
      if (!currentUser) {
        navigate("/login");
      } else {
        let result = isProductExist(product._id);

        if (result) {
          navigate("/cart");
          return;
        }
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

    return isExist ? true : false;
  };
  return (
    <div>
      {loading ? <span className={classes["loader"]}></span> : null}
      {!loading ? (
        <div className={`${classes["product-container"]} ${classes["card-shadow"]}`}>
          <div className={classes["product-img-container"]}>
            <img src={product.image} alt={product.title} />
            <div className={`${classes["flex-y"]} ${classes["padding-2"]}`}>
              <button
                className="btn btn-secondary"
                onClick={() => wishlistHandler(productId)}
              >
                {isProductWishlisted(productId)
                  ? "Remove from wishlist"
                  : "Save to wishlist"}
              </button>
              <button
                className="btn btn-primary"
                onClick={() => addToCartHandler(product)}
              >
                {isProductExist(product._id) ? "Go to cart" : "Add to cart"}
              </button>
            </div>
          </div>
          <div className={classes["product-typography"]}>
            <h2>
              {product.brand} {product.title}
            </h2>

            <h1>₹{product.price}</h1>
            <div className={classes["table-container"]}>
              <h3>Product Details</h3>
              <table className={classes["description-table"]}>
                {product.description.map((description) => {
                  return (
                    <tr>
                      <th>{description.title}</th>
                      <td>{description.info}</td>
                    </tr>
                  );
                })}
                <tr>
                  <th>Rating</th>
                  <td>
                    <Rating padding="padding-0" rating={product.rating} />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      ) : null}

      {apiCalled && processing && <InfoAlert message={alertMessage} />}
      {apiCalled && !processing && <SuccessAlert message={alertMessage} />}
    </div>
  );
};

export default SingleProduct;
