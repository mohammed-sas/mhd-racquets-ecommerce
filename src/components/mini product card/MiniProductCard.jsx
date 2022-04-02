import classes from './miniProductCard.module.css'
const MiniProductCard = ({ product }) => {
  return (
    <div className={classes["landscape-card"]}>
      <div className={classes["image"]}>
        <img src={product.image} alt={product.title} />
      </div>
      <div className={classes["product-details"]}>
        <h4>{product.title}</h4>
        <span>Price : {product.price}</span>
        <span>Quantity: {product.qty}</span>
      </div>
    </div>
  );
};

export default MiniProductCard;
