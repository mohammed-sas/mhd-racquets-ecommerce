import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./singleProduct.module.css";
import axios from 'axios'
import Rating from "../../components/rating/Rating";
import { useWishlist } from "../../context/wishlist-context";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-context";
const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const {wishlistState,addToWishlist,deleteFromWishlist} = useWishlist();
  const {currentUser} = useAuth();
  const {cartState,addToCart} = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
       let response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.product);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  const wishlistHandler = async (id) => {
    try {
        
        if(!currentUser){
            navigate("/login");
            return;
        }
      let isExist = isProductWishlisted(id);
      if (!isExist) {
        await addToWishlist(product);
      } else {
        await deleteFromWishlist(product._id);
        return;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isProductWishlisted = (id) => {
    let result = wishlistState.wishlist.find(
      (item) => item._id == id
    );
    return result ? true : false;
  };

  const addToCartHandler = async (product) => {
    try {
      if (!currentUser) {
        navigate("/login");
      } else {
        let result = isProductExist(product._id);

        if (result) {
          navigate("/cart");
          return;
        }
        await addToCart(product);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const isProductExist = (id) => {
    let isExist = cartState.cart.find((item) => item._id === id);

    return isExist ? true : false;
  };
  return (
    <div>
      {loading ? <span className={classes["loader"]}></span> : null}
      {!loading ? (
        <div className={classes["product-container"]}>
          <div className={classes["product-img-container"]}>
            <img src={product.image} alt={product.title} />
            <div className={`${classes["flex-y"]} ${classes["padding-2"]}`}>
                <button className="btn btn-secondary" onClick={()=>wishlistHandler(productId)}>{isProductWishlisted(productId)?"Remove from wishlist" : "Save to wishlist"}</button>
                <button className="btn btn-primary" onClick={()=>addToCartHandler(product)}>{isProductExist(product._id) ? "Go to cart" : "Add to cart"}</button>
            </div>
          </div>
          <div className={classes["product-typography"]}>
            <h2>
              {product.brand} {product.title}
            </h2>

            <h1>₹{product.price}</h1>
            <div className={classes["table-container"]}>
                <h3>Product Details</h3>
                <table className={classes["description-table"]}>
                  {product.description.map((description) => {
                    return (
                      <tr>
                        <th>{description.title}</th>
                        <td>{description.info}</td>
                      </tr>
                    );
                  })}
                  <tr>
                      <th>Rating</th>
                      <td><Rating padding="padding-0" rating={product.rating}/></td>
                  </tr>
                </table>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SingleProduct;