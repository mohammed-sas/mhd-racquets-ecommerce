import classes from './address.module.css';

const Address = () => {
  return (
    <main className={classes["profile-container"]}>
      <div className={classes["profile-header"]}>
        <div className={classes["user-header"]}>
          {/* <img src="../Images/mhd-dp.jpeg" alt="avatar" className="avatar avatar-lg"> */}
          <div className={classes["user-header-info"]}>
            <h3 className={classes["charcaol"]}>Mohammed</h3>
            <p className={classes["charcaol"]}>xxxxxx@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={classes["profile-aside"]}>
        <div className={classes["profile-tabs"]}>
          <span className={classes["tab-item charcaol "]}>
            <a href="">Profile</a>
          </span>
          <span className={classes["tab-item charcaol active"]}>
            <a href="">Addresses</a>
          </span>
        </div>
      </div>
      <div className={classes["address-list-container"]}>
        <div className={classes["address-list-header"]}>
          <h3 className={classes["charcoal"]}>Saved Addresses</h3>
          <button className="btn btn-primary">Add New Address</button>
        </div>
        <h3 className={classes["charcoal"]}>Default Address</h3>
        <div className={classes["address-card"]}>
          <h4 className={classses["charcoal"]}>Mohammed</h4>
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
    </main>
  );
};

export default Address;
