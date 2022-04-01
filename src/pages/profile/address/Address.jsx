import classes from '../profile.module.css';
import styles from './address.module.css';
import AddressCard from './address card/AddressCard';
import AddressForm from './address form/AddressForm';
import { useToggle } from '../../../hooks/useToggle';
import { useAddress } from '../../../context/address-context';
const Address = () => {
    const [showModal,setShowModal] = useToggle(false);
    const {addressState} = useAddress();
  return (
    
      <div className={styles["address-list-container"]}>
        <div className={styles["address-list-header"]}>
          <h3 className={classes["charcoal"]}>Saved Addresses</h3>
          <button className="btn btn-primary" onClick={setShowModal}>Add New Address</button>
        </div>
        <div className={classes["lists"]}>
            {
                addressState.address.map(savedAddress=>{
                    return <AddressCard key={savedAddress._id} address={savedAddress}/>
                })
            }
        </div>
        {showModal ? <AddressForm setShowModal={setShowModal}/>:null}
      </div>
  );
};

export default Address;
