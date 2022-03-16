import { useEffect, useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { useCart } from "../../context/cart-context";
import classes from "./cart.module.css";
const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const [totalPrice,setTotalPrice] = useState(0);
  const { getCart,removeFromCart } = useCart();
  const navigate = useNavigate();
  const isMount = useRef(true);
  useEffect(() => {
    const populateCart = async () => {
      try {
        let response = await getCart();
        if(isMount.current){
        setCartList(response.data.cart);
        let total = response.data.cart.reduce((acc,curr)=>acc+parseInt(curr.price.replace(/,/g,'')),0);
        setTotalPrice(total);
        }
      } catch (error) {
        console.log(error);
      }
    };
    populateCart();

    return ()=>isMount.current=false;

  }, [cartList,totalPrice]);

  const removeHandler=async (id)=>{
    try{
        let response = await removeFromCart(id);
        setCartList(response.data.cart);
        if(response.data.cart.length===0){
            navigate("/products-listing")
        }
        let total = response.data.cart.reduce((acc,curr)=>acc+parseInt(curr.price.replace(/,/g,'')),0);
        setTotalPrice(total);
    }catch(error){
        console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <div className={classes["main-cart"]}>
        <h2 className="centered-text grey">My Cart</h2>
        <div className={classes['cart-container']}>
          <div className={classes["cart-list"]}>
            {cartList.map((product) => {
              return (
                  
                <div
                key={product.id}
                  className="card-container product-container product-landscape-container"
                >
                  <div className="card-image-basic product-landscape-image relative-pos">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-landscape-body  bg-purple-50">
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
                    <div className="product-quantity">
                      <label htmlFor="quantity">
                        Quantity:
                        <button className="btn-qty">-</button>
                        <input id={classes["qty-input"]} type="number" placeholder="1" />
                        <button className="btn-qty">+</button>
                      </label>
                    </div>
                    <div className="card-footer-basic product-card-footer fluid-y bg-purple-50">
                      <button className="btn btn-secondary" onClick={()=>removeHandler(product._id)}>
                        Remove from cart
                      </button>
                    </div>
                  </div>
                </div>
                
              );
            })}
          </div>
          <div className={classes["cart-summary-container"]}>
            <h2>Price Details</h2>
            <hr />
            <div className={classes["total-summary"]}>
              <div>
                <span>Price ({cartList.length} item)</span>
                <span>₹{totalPrice}</span>
              </div>
              <div>
                <span>Discount</span>
                <span>₹0</span>
              </div>
              <div>
                <span>Delivery Charges</span>
                <span>₹299</span>
              </div>
              <hr />
              <div>
                <h2>Total Amount</h2>
                <h2>₹{totalPrice+299}</h2>
              </div>
            </div>

            <p>You will save ₹0 in this order</p>
            <button class="btn btn-primary">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
