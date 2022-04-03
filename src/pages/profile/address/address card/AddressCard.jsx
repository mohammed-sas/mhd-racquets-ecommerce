import React from 'react'
import { useAddress } from '../../../../context';
import { useToggle } from '../../../../hooks/useToggle';
import EditAddressForm from '../edit form/EditAddressForm'
import classes from '../address.module.css';
const AddressCard = ({address}) => {
  const {deleteAddress} = useAddress();
  const [showModal,setShowModal] = useToggle(false);
  const removeHandler=async ()=>{
    try{
      await deleteAddress(address._id);
    }catch(error){
      console.log(error);
    }
  }
  const editHandler= ()=>{
    setShowModal()
  }
    return (
        <div className={classes["address-card"]}>
        <h4 className={classes["charcoal"]}>{address.name}</h4>
        <p>{address.building}</p>
        <p>{address.area}</p>
        <p>{address.city}</p>
        <p>{address.state}, India - {address.pincode}</p>
        <p>Mobile: {address.mobile}</p>
        <div className="fluid-x">
          <button className="btn btn-secondary" onClick={editHandler}>Edit</button>
          <button className="btn btn-secondary" onClick={removeHandler}>Remove</button>
        </div>
        {showModal ? <EditAddressForm address={address} setShowModal={setShowModal}/> : null}
      </div>
    )
}

export default AddressCard
