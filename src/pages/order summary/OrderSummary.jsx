import classes from "./orderSummary.module.css";
import CartSummary from "../cart/CartSummary";
import { useCart, useAddress } from "../../context";
import { useToggle } from "../../hooks/useToggle";
import { MiniAddressCard, MiniProductCard } from "../../components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const { cartState } = useCart();
  const { addressState } = useAddress();
  const [showAddress, setShowAddress] = useToggle(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const navigate = useNavigate();
  return cartState.orderSuccess === false ? (
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
            ) : (
              <button
                className="btn btn-primary"
                onClick={() => navigate("/profile/address")}
              >
                Add Address
              </button>
            )}
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
  ) : (
    <div>
      <h1 className="centered-text">
        Congrats! Order has been placed Successfully!!!
      </h1>
    </div>
  );
};

export default OrderSummary;
