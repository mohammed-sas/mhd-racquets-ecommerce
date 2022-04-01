import classes from '../profile.module.css';
import styles from './address.module.css';

const Address = () => {
  return (
    
      <div className={styles["address-list-container"]}>
        <div className={styles["address-list-header"]}>
          <h3 className={classes["charcoal"]}>Saved Addresses</h3>
          <button className="btn btn-primary">Add New Address</button>
        </div>
        <h3 className={classes["charcoal"]}>Default Address</h3>
        <div className={styles["address-card"]}>
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
      </div>
  );
};

export default Address;
