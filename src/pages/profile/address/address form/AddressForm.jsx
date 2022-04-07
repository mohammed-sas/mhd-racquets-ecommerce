import { useState } from "react";
import { useAddress } from "../../../../context";
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
          <span>Name</span>
          <input name="name" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="building">
          <span>Building Name and No.</span>
          <input
            name="building"
            onChange={changeHandler}
            type="text"
            required
          />
        </label>
        <label htmlFor="area">
          <span>Area</span>
          <input name="area" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="city">
          <span>City</span>
          <input name="city" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="state">
          <span>State</span>
          <input name="state" onChange={changeHandler} type="text" required />
        </label>
        <label htmlFor="pincode">
          <span>Pincode</span>
          <input name="pincode" onChange={changeHandler} type="number" required />
        </label>
        <label htmlFor="mobile">
          <span>Mobile No.</span>
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
