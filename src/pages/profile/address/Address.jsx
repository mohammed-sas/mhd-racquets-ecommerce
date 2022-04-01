import classes from '../profile.module.css';
import styles from './address.module.css';
import AddressCard from './address card/AddressCard';
import AddressForm from './address form/AddressForm';
import { useToggle } from '../../../hooks/useToggle';
const Address = () => {
    const [showModal,setShowModal] = useToggle(false);
  return (
    
      <div className={styles["address-list-container"]}>
        <div className={styles["address-list-header"]}>
          <h3 className={classes["charcoal"]}>Saved Addresses</h3>
          <button className="btn btn-primary" onClick={setShowModal}>Add New Address</button>
        </div>
        <AddressCard/>
        {showModal ? <AddressForm setShowModal={setShowModal}/>:null}
      </div>
  );
};

export default Address;
