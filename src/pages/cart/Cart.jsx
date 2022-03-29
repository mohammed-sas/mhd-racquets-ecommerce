import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-context";
import classes from "./cart.module.css";
import CartSummary from "./CartSummary";
import  InfoAlert from '../../components/Alerts/Info/InfoAlert'
import SuccessAlert from '../../components/Alerts/Success/SuccessAlert';
const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartState, getCart, removeFromCart, qtyIncDec } = useCart();
  const navigate = useNavigate();
  const [apiCalled,setApiCalled] = useState(false);
  const [processing,setProcessing] = useState(false);
  const [alertMessage,setAlertMessage] = useState("");
  useEffect(() => {
    const populateCart = async () => {
      try {
        setLoading(true);
        await getCart();
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    populateCart();
  }, []);

  const removeHandler = async (id) => {
    try {
      setApiCalled(true);
      setProcessing(true);
      setAlertMessage("removing from cart");
      await removeFromCart(id);
      setAlertMessage("removed from cart");
      setProcessing(false);
      if (cartState.cart.length === 1) {
        navigate("/products-listing");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const qtyHandler = async (action, id, quantity) => {
    try {
      if (quantity == 1 && action.type === "decrement") {
        await removeHandler(id);
        return;
      }
      setApiCalled(true);
      setProcessing(true);
      setAlertMessage("updating quantity")
      await qtyIncDec(action, id);
      setProcessing(false);
      setAlertMessage("Quantity updated")
      if (cartState.cart.length === 0) navigate("/products-listing");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading ? <span className={classes["loader"]}></span> : null}
      <div className={classes["main-cart"]}>
        <h2 className="centered-text grey">My Cart</h2>
        {!loading && (
          <div className={classes["cart-container"]}>
            <div className={classes["cart-list"]}>
              {cartState.cart.map((product) => {
                return (
                  <div
                    key={product._id}
                    className={`card-container product-container product-landscape-container ${classes["card-shadow"]} ${classes["landscape-mobile-width"]}`}
                  >
                    <div className="card-image-basic product-landscape-image relative-pos">
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className={`product-landscape-body  bg-purple-50  ${classes["landscape-card-height"]}`}>
                      <div className="card-heading bg-purple-50">
                        <div className="padding-l-r-16-b-5 heading bg-purple-50">
                          {product.title}
                        </div>
                        <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                          {product.brand}
                        </div>
                      </div>
                      <div className="product-price padding-l-r-16-b-5  bg-purple-50">
                        <h2>₹{product.price}</h2>
                      </div>
                      <div className="product-quantity">
                        <label htmlFor="quantity">
                          Quantity:
                          <button
                            className={classes["btn-qty"]}
                            onClick={() =>
                              qtyHandler(
                                { type: "decrement" },
                                product._id,
                                product.qty
                              )
                            }
                          >
                            -
                          </button>
                          <input
                            id={classes["qty-input"]}
                            type="number"
                            placeholder={product.qty}
                          />
                          <button
                            className={classes["btn-qty"]}
                            onClick={() =>
                              qtyHandler({ type: "increment" }, product._id)
                            }
                          >
                            +
                          </button>
                        </label>
                      </div>
                      <div className="card-footer-basic product-card-footer fluid-y bg-purple-50">
                        <button
                          className="btn btn-secondary"
                          onClick={() => removeHandler(product._id)}
                        >
                          Remove from cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            {cartState.cart.length !== 0 ?  <CartSummary cartState={cartState} /> : null}
          </div>
        )}
       {cartState.cart.length===0?  <div className={classes["display-flex-center"]}>
          <h2 className="centered-text">Your cart is empty!</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/products-listing")}
          >
            Shop now
          </button>
        </div> : null}
      </div>
      {(apiCalled&&processing) && <InfoAlert message={alertMessage}/>}
        {(apiCalled&&!processing) && <SuccessAlert message={alertMessage}/>}
    </div>
  );
};

export default Cart;
