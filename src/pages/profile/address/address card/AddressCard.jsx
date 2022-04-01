import React from 'react'
import classes from '../address.module.css';
const AddressCard = () => {
    return (
        <div className={classes["address-card"]}>
        <h4 className={classes["charcoal"]}>Mohammed</h4>
        <p>N-69,Jeevan Tara Building,Gate No.4</p>
        <p>Sansad Marg</p>
        <p>New Delhi</p>
        <p>India - 110001</p>
        <p>Mobile: XXXXXXXX</p>
        <div className="fluid-x">
          <button className="btn btn-secondary">Edit</button>
          <button className="btn btn-secondary">Remove</button>
        </div>
      </div>
    )
}

export default AddressCard
