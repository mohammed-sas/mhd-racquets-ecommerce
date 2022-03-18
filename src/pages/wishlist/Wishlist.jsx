import Navbar from "../../components/Navbar/Navbar";
import classes from './wishlist.module.css'
const Wishlist = () => {
  return (
    <div>
      <Navbar />
      <main className={classes["wishlist-main"]}>
        <h1 className="centered-text grey">My Wishlist</h1>
        <div className={classes["wishlist-container"]}>
          <div className="card-container product-container">
            <div className="card-image-basic product-image relative-pos">
              {/* <img src={} alt="astrox 100 game" /> */}
              <span className="btn-dismiss">
                <i className="fas fa-heart  wishlist-active"></i>
              </span>
            </div>
            <div className="card-heading bg-purple-50">
              <div className="padding-l-r-16-b-5 heading bg-purple-50">
                Astrox 100 Game
              </div>
              <div className="padding-l-r-16-b-5 sub-heading bg-purple-50">
                by Yonex
              </div>
            </div>
            <div className="product-price padding-l-r-16-b-5  bg-purple-50">
              <h2>₹5,799</h2>
            </div>
            <div className="card-footer-basic product-card-footer fluid-x bg-purple-50">
              <button className="btn btn-primary">Move to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Wishlist;
