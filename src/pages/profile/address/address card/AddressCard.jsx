import React from 'react'
import { useAddress } from '../../../../context/address-context';
import classes from '../address.module.css';
const AddressCard = ({address}) => {
  const {deleteAddress} = useAddress();
  const removeHandler=async ()=>{
    try{
      await deleteAddress(address._id);
    }catch(error){
      console.log(error);
    }
  }
    return (
        <div className={classes["address-card"]}>
        <h4 className={classes["charcoal"]}>{address.name}</h4>
        <p>{address.building}</p>
        <p>{address.area}</p>
        <p>{address.city}</p>
        <p>India - {address.pincode}</p>
        <p>Mobile: {address.mobile}</p>
        <div className="fluid-x">
          <button className="btn btn-secondary">Edit</button>
          <button className="btn btn-secondary" onClick={removeHandler}>Remove</button>
        </div>
      </div>
    )
}

export default AddressCard
