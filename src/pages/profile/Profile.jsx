import classes from './profile.module.css';
import Address from './address/Address'
import {useAuth} from '../../context/auth-context'
const Profile = () => {
  const {currentUser} = useAuth();
  return (
    <main className={classes["profile-container"]}>
      <div className={classes["profile-header"]}>
        <div className={classes["user-header"]}>
          <div className={classes["user-header-info"]}>
            <h3 className={classes["charcaol"]}>{currentUser.firstName}</h3>
            <p className={classes["charcaol"]}>{currentUser.email}</p>
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
