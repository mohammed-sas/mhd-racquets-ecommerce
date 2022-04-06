import { useAuth } from '../../../context';
import classes from '../profile.module.css';

const ProfileDetail = () => {
    const {currentUser} = useAuth();
    return (
        <div className={classes["profile-main"]}>
        <div className={classes["profile-overview"]}>
          <h2 className="text-white">Profile Details</h2>
          <div className={classes["profile-overview-item"]}>
            <span>Full Name </span>
            <span>{currentUser.firstName} {currentUser.lastName}</span>
          </div>
          <div className={classes["profile-overview-item"]}>
            <span>Mobile Number</span> <span>{currentUser.mobile}</span>
          </div>
          <div className={classes["profile-overview-item"]}>
            <span>Email ID</span> <span>{currentUser.email}</span>
          </div>
        </div>
      </div>
    )
}

export default ProfileDetail
