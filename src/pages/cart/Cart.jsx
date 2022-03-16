import Navbar from "../../components/Navbar/Navbar";
import './cart.css';
const Cart = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h2 className="centered-text grey">My Cart</h2>
        <div className="cart-container">
          <div className="card-container product-container product-landscape-container">
            <div className="card-image-basic product-landscape-image relative-pos">
              <img src="../Images/astrox100game.png" alt="astrox 100 game" />
            </div>
            <div className="product-landscape-body  bg-purple-50">
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
              <div className="product-quantity">
                <label htmlFor="quantity">
                  Quantity:
                  <button className="btn-qty">-</button>
                  <input id="qty-input" type="number" value="1" />
                  <button className="btn-qty">+</button>
                </label>
              </div>
              <div className="card-footer-basic product-card-footer fluid-y bg-purple-50">
                <button className="btn btn-primary">Add to Cart</button>
                <button className="btn btn-secondary">Save to Wishlist</button>
              </div>
            </div>
          </div>
          <div className="cart-summary-container">
            <h2>Price Details</h2>
            <hr />
            <div className="total-summary">
              <div>
                <span>Price (1 item)</span>
                <span>₹5,799</span>
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
                <h2>₹6098</h2>
              </div>
            </div>

            <p>You will save ₹0 in this order</p>
            <button class="btn btn-primary">Place Order</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;
