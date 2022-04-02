import { useNavigate } from "react-router-dom";
import classes from "./cart.module.css";

const CartSummary = ({ cartState }) => {
  const navigate = useNavigate();
  return (
    <div className={classes["cart-summary-container"]}>
      <h2>Price Details</h2>
      <hr />
      <div className={classes["total-summary"]}>
        <div>
          <span>Price ({cartState.totalItems} item)</span>
          <span>₹{cartState.totalPrice}</span>
        </div>
        <div>
          <span>Discount</span>
          <span>₹0</span>
        </div>
        <div>
          <span>Delivery Charges</span>
          <span>₹{cartState.totalPrice !== 0 ? "299" : "0"}</span>
        </div>
        <hr />
        <div>
          <h2>Total Amount</h2>
          <h2>
            ₹{cartState.totalPrice !== 0 ? cartState.totalPrice + 299 : 0}
          </h2>
        </div>
      </div>

      <p>You will save ₹0 in this order</p>
      <button
        className="btn btn-primary"
        onClick={() => navigate("/order-summary")}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
