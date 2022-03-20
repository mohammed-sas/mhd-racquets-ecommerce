import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";



import classes from "./singleProduct.module.css";

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
          </div>
          <div>
            <h1>
              {product.brand} {product.title}
            </h1>

            <h2>₹{product.price}</h2>

            <table>
              {product.description.map((description) => {
                return (
                  <tr>
                    <th>{description.title}</th>

                    <td>{description.info}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      ) : null}
    </div>
  );
};
