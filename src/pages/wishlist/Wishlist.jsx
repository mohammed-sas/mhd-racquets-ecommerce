import Navbar from "../../components/Navbar/Navbar";
import { useWishlist } from "../../context/wishlist-context";
import classes from "./wishlist.module.css";
import {useCart} from '../../context/cart-context';
const Wishlist = () => {
  const {wishlistState,deleteFromWishlist} = useWishlist();
  const {cartState,qtyIncDec,addToCart} = useCart();
  const removeWishlist=async (id)=>{
    try{
      await deleteFromWishlist(id);
    }catch(error){
      console.log(error)
    }
  }
  const moveToCartHandler=async (product)=>{
    try{
      await removeWishlist(product._id);
      let isExistInCart = cartState.cart.find(item=>item._id === product._id);
      if(isExistInCart){
        await qtyIncDec({type:"increment"},product._id);
      }else{
        await addToCart(product);
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <main className={classes["wishlist-main"]}>
        <h1 className="centered-text grey">My Wishlist</h1>
        {
          wishlistState.wishlist.length === 0? <h2 className="centered-text">Your wishlist is empty!</h2>: null
        }
        <ul className={classes["wishlist-items"]}>
          {wishlistState.wishlist.map((product) => {
            return (
              <li key={product._id}>
                <div className={classes["wishlist-container"]}>
                  <div className="card-container product-container">
                    <div className="card-image-basic product-image relative-pos">
                      <img src={product.image} alt={product.title} />
                      <span className="btn-dismiss" onClick={()=>removeWishlist(product._id)}>
                        <i className="fas fa-heart  wishlist-active"></i>
                      </span>
                    </div>
                    <div className="card-heading bg-purple-50">
                      <div className="padding-l-r-16-b-5 heading bg-purple-50">
                        {product.title}
                      </div>
                      <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                        {product.brand}
                      </div>
                    </div>
                    <div className="product-price padding-l-r-16-b-5  bg-purple-50">
                      <h2>₹{product.price}</h2>
                    </div>
                    <div className="card-footer-basic product-card-footer fluid-x bg-purple-50">
                      <button className="btn btn-primary" onClick={()=>moveToCartHandler(product)}>Move to Cart</button>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
};

export default Wishlist;
