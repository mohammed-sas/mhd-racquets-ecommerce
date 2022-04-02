import classes from "./orderSummary.module.css";
import CartSummary from "../cart/CartSummary";
import { useCart } from "../../context/cart-context";
import { useAddress } from "../../context/address-context";
import { useToggle } from "../../hooks/useToggle";
import MiniAddressCard from "../../components/mini address card/MiniAddressCard";
import MiniProductCard from "../../components/mini product card/MiniProductCard";

const OrderSummary = () => {
  const { cartState } = useCart();
  const { addressState } = useAddress();
  const [showAddress, setShowAddress] = useToggle(false);

  return (
    <main className={classes["summary-container"]}>
      <div className={classes["container"]}>
        <div className={classes["address-container"]}>
          <div className={classes["address-header"]}>
            <h3>
              Delivery Address
            </h3>
              {showAddress ? (
                <i className="fas fa-chevron-circle-up" onClick={setShowAddress}></i>
              ) : (
                <i className="fas fa-chevron-circle-down" onClick={setShowAddress}></i>
              )}
          </div>
          {showAddress ? (
            <div className={classes["address-lists"]}>
              {addressState.address.map((address) => {
                return <MiniAddressCard address={address} />;
              })}
            </div>
          ) : null}
        </div>

        <div className={classes["product-summary"]}>
          <div>
            {cartState.cart.map((item) => {
              return <MiniProductCard />;
            })}
          </div>
        </div>
      </div>
      <CartSummary cartState={cartState} />
    </main>
  );
};

export default OrderSummary;
