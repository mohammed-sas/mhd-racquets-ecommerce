import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import classes from "./singleProduct.module.css";
import axios from 'axios'
import Rating from "../../components/rating/Rating";
const SingleProduct = () => {
  const { productId } = useParams();
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

  return (
    <div>
      <Navbar />
      {loading ? <span className={classes["loader"]}></span> : null}
      {!loading ? (
        <div className={classes["product-container"]}>
          <div className={classes["product-img-container"]}>
            <img src={product.image} alt={product.title} />
            <div className={`${classes["flex-y"]} ${classes["padding-2"]}`}>
                <button className="btn btn-secondary">Save to wishlist</button>
                <button className="btn btn-primary">Add to cart</button>
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