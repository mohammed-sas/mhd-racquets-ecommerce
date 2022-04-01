import classes from './profile.module.css';
import Address from './address/Address'
const Profile = () => {
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
          <span className={`${classes["tab-item"]} ${classes["charcaol"]} ${classes["active"]}`}>
            <a href="">Addresses</a>
          </span>
        </div>
      </div>
        <Address/>
    </main>
  );
};

export default Profile;
