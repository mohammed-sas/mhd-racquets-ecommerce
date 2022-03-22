import classes from '../alert.module.css';

const InfoAlert = ({message}) => {
  return (
    <div class={"alert alert-info " + classes["top-6"]}>
      <i class="fas fa-info-circle"></i>
      <p>{message}</p>
    </div>
  );
};

export default InfoAlert;
