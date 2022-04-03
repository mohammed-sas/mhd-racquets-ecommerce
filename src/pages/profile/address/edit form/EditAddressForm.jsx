import { useState } from "react";
import { useAddress } from "../../../../context";
import classes from "../address form/addressForm.module.css";

const EditAddressForm = ({ address,setShowModal }) => {
  const [editedAddress, setEditedAddress] = useState(address);
  const {updateAddress} = useAddress();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setEditedAddress({
      ...editedAddress,
      [name]: value,
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await updateAddress(editedAddress);
      setShowModal();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes["form-container"]}>
      <form action="post" className={classes["form"]} onSubmit={submitHandler}>
        <i
          className={`${classes["close-btn"]} fas fa-times`}
          onClick={setShowModal}
        ></i>
        <h2>Address Form</h2>
        <label htmlFor="name">
          Name
          <br />{" "}
          <input
            name="name"
            defaultValue={address.name}
            onChange={changeHandler}
            type="text"
            required
          />
        </label>
        <label htmlFor="building">
          Building Name and No.
          <br />{" "}
          <input
            name="building"
            defaultValue={address.building}
            onChange={changeHandler}
            type="text"
            required
          />
        </label>
        <label htmlFor="area">
          Area
          <br />{" "}
          <input
            name="area"
            defaultValue={address.area}
            onChange={changeHandler}
            type="text"
            required
          />
        </label>
        <label htmlFor="city">
          City
          <br />{" "}
          <input
            name="city"
            defaultValue={address.city}
            onChange={changeHandler}
            type="text"
            required
          />
        </label>
        <label htmlFor="state">
          State
          <br />{" "}
          <input
            name="state"
            defaultValue={address.city}
            onChange={changeHandler}
            type="text"
            required
          />
        </label>
        <label htmlFor="pincode">
          Pincode
          <br />{" "}
          <input
            name="pincode"
            defaultValue={address.pincode}
            onChange={changeHandler}
            type="number"
            required
          />
        </label>
        <label htmlFor="mobile">
          Mobile No.
          <br />{" "}
          <input
            name="mobile"
            defaultValue={address.mobile}
            onChange={changeHandler}
            type="number"
            required
          />
        </label>
        <input type="submit" value="Submit" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default EditAddressForm;
