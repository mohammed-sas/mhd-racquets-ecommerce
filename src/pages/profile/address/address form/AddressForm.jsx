import { useState } from "react";
import { useAddress } from "../../../../context/address-context";
import classes from "./addressForm.module.css";

const AddressForm = ({ setShowModal }) => {
  const [address, setAddress] = useState(null);
  const {addAddress} = useAddress();
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setAddress({
      ...address,
      [name]: value,
    });
  };
  const submitHandler =async (e) => {
        try{
            e.preventDefault();
            await addAddress(address);
            setShowModal();
        }catch(error){
            console.log(error);
        }
  };
  return (
    <div className={classes["form-container"]}>
      <form action="post" className={classes["form"]} onSubmit={submitHandler}>
        <i className={`${classes["close-btn"]} fas fa-times`} onClick={setShowModal}></i>
        <h2>Address Form</h2>
        <label htmlFor="name">
          Name
          <br />{" "}
          <input name="name" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="building">
          Building Name and No.
          <br />{" "}
          <input
            name="building"
            onChange={changeHandler}
            type="text"
            required
          />
        </label>
        <label htmlFor="area">
          Area
          <br />{" "}
          <input name="area" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="city">
          City
          <br />{" "}
          <input name="city" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="state">
          State
          <br />{" "}
          <input name="state" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="pincode">
          Pincode
          <br />{" "}
          <input name="pincode" onChange={changeHandler} type="number" required />
        </label>
        <label htmlFor="mobile">
          Mobile No.
          <br />{" "}
          <input
            name="mobile"
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

export default AddressForm;
