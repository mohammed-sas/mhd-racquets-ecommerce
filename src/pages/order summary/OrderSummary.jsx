import classes from "./orderSummary.module.css";
import CartSummary from "../cart/CartSummary";
import { useCart } from "../../context/cart-context";
import { useAddress } from "../../context/address-context";
import { useToggle } from "../../hooks/useToggle";
import MiniAddressCard from "../../components/mini address card/MiniAddressCard";
import MiniProductCard from "../../components/mini product card/MiniProductCard";
import { useState } from "react";

const OrderSummary = () => {
  const { cartState } = useCart();
  const { addressState } = useAddress();
  const [showAddress, setShowAddress] = useToggle(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  return (
    <main className={classes["summary-container"]}>
      <div className={classes["container"]}>
        <div className={classes["address-container"]}>
          <h3>Delivery Address</h3>
          <div>
            {selectedAddress ? (
              <MiniAddressCard
                address={selectedAddress}
                showInput={!!selectedAddress}
              />
            ) : null}
          </div>
          <div className={classes["address-header"]}>
            <h4>Select Address</h4>
            {showAddress ? (
              <i
                className="fas fa-chevron-circle-up"
                onClick={setShowAddress}
              ></i>
            ) : (
              <i
                className="fas fa-chevron-circle-down"
                onClick={setShowAddress}
              ></i>
            )}
          </div>
          {showAddress ? (
            <div className={classes["address-lists"]}>
              {addressState.address.map((address) => {
                return (
                  <MiniAddressCard
                    address={address}
                    setSelectedAddress={setSelectedAddress}
                  />
                );
              })}
            </div>
          ) : null}
        </div>

        <div className={classes["product-summary"]}>
          <h3>Product Summary</h3>
          <div className={classes["product-container"]}>
            {cartState.cart.map((item) => {
              return <MiniProductCard product={item} />;
            })}
          </div>
        </div>
      </div>
      <CartSummary cartState={cartState} orderAddress={selectedAddress} />
    </main>
  );
};

export default OrderSummary;
