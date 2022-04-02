import classes from "./miniAddressCard.module.css";

const MiniAddressCard = ({ address, setSelectedAddress, showInput }) => {
  return (
    <div className={classes["container"]}>
      {!showInput ? (
        <input
          type="radio"
          name="selectedAddress"
          onChange={() => setSelectedAddress(address)}
        />
      ) : null}
      <div className={classes["address-details"]}>
        <h3>{address.name}</h3>
        <p>
          {address.building}, {address.area}, {address.city}
        </p>
        <p>
          {address.state}, India - {address.pincode}
        </p>
        <p>{address.mobile}</p>
      </div>
    </div>
  );
};

export default MiniAddressCard;
