import classes from "./profile.module.css";
import Address from "./address/Address";
import { useAuth } from "../../context";
import ProfileDetail from "./detail/ProfileDetail";
import { Routes,Route,Link, BrowserRouter } from "react-router-dom";
const Profile = () => {
  const { currentUser } = useAuth();
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
          <span
            className={`${classes["tab-item"]} ${classes["charcaol"]} ${classes["active"]}`}
          >
            <Link to="/profile/address">Addresses</Link>
          </span>
          <span
            className={`${classes["tab-item"]} ${classes["charcaol"]} ${classes["active"]}`}
          >
            <Link to="/profile/detail">Profile Detail</Link>
          </span>
        </div>
      </div>
      <Routes>
        <Route path="address" element={<Address />} />
        <Route path="detail" element={<ProfileDetail />} />
      </Routes>
    </main>
  );
};

export default Profile;
