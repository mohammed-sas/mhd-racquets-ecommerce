import { useLocation, useNavigate } from "react-router-dom";
import classes from "./cart.module.css";
import logo from "../../assets/ecomm-logo.png";
import { useCart } from "../../context";
import { InfoAlert } from "../../components";
import { useToggle } from "../../hooks/useToggle";
import { useState } from "react";
const CartSummary = ({ cartState, orderAddress, discount }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { deleteCart, cartDispatch } = useCart();
  const [showInfo, setShowInfo] = useToggle(false);
  const [alertMessage, setAlertMessage] = useState("");

  const loadScript = async (url) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = url;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const showRazorpay = async () => {
    try {
      const response = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!response) {
        return;
      }
      const options = {
        key: "rzp_test_gilfWDuN1QoK9R",
        amount: (cartState.totalPrice - cartState.discount + 299) * 100,
        currency: "INR",
        name: "MHD Racquets Store",
        description: "Thank you for shopping with us",
        image: logo,
        handler: function (response) {
          const orderData = {
            products: [...cartState.cart],
            amount: `${cartState.totalPrice - discount + 299}`,
            paymentId: response.razorpay_payment_id,
            delivery: orderAddress,
          };
          deleteCart();
          cartDispatch({type:"ORDER_SUCCESS"})
        },
        prefill: {
          name: `${orderAddress.name}`,
          contact: `${orderAddress.mobile}`,
        },
        theme: {
          color: "#7e22ce",
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error) {
      console.log(error);
    }
  };
  const checkoutHandler = () => {
    if (!orderAddress) {
      setAlertMessage("Kindly select delivery address");
      setShowInfo();
    }
    showRazorpay();
  };
  const discountHandler = (e) => {
    cartDispatch({ type: "DISCOUNT", payload: e.target.value });
  };
  return (
    <div className={classes["cart-summary-container"]}>
      <h2>Price Details</h2>
      <hr />
      <div className={classes["total-summary"]}>
        <div>
          <span>Price ({cartState.totalItems} item)</span>
          <span>₹{cartState.totalPrice}</span>
        </div>
        {location.pathname!=="/order-summary" && <div className={classes["coupon-container"]}>
          <h3>Apply coupon</h3>
          <select name="coupon" onChange={discountHandler}>
            <option value="0" selected={cartState.discount === 0}></option>
            <option value="100" disabled={cartState.totalPrice <= 5000}>
              ₹100/- off above ₹5,000
            </option>
            <option value="500" disabled={cartState.totalPrice <= 10000}>
              ₹500/- off above ₹10,000
            </option>
            <option value="1000" disabled={cartState.totalPrice <= 15000}>
              ₹1,000/- off above ₹15,000
            </option>
          </select>
        </div>}
        <div>
          <span>Discount</span>
          <span>₹{cartState.discount}</span>
        </div>
        <div>
          <span>Delivery Charges</span>
          <span>₹{cartState.totalPrice !== 0 ? "299" : "0"}</span>
        </div>
        <hr />
        <div>
          <h2>Total Amount</h2>
          <h2>
            ₹
            {cartState.totalPrice !== 0
              ? cartState.totalPrice + 299 - cartState.discount
              : 0}
          </h2>
        </div>
      </div>

      <p>You will save ₹0 in this order</p>
      {location.pathname === "/cart" ? (
        <button
          className="btn btn-primary"
          onClick={() => navigate("/order-summary")}
        >
          Place Order
        </button>
      ) : (
        <button className="btn btn-primary" onClick={checkoutHandler}>
          Checkout
        </button>
      )}
      {showInfo ? <InfoAlert message={alertMessage} /> : null}
    </div>
  );
};

export default CartSummary;
