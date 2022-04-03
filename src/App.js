import classes from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar } from "./components";
import {
  Home,
  Login,
  Cart,
  Products,
  Wishlist,
  SingleProduct,
  OrderSummary,
  Profile,
  Signup,
} from "./pages";
function App() {
  return (
    <div className={classes["app-container"]}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products-listing" element={<Products />} />
        <Route path="/mock-api" element={<Mockman />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
        <Route path="/profile/address" element={<Profile />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
    </div>
  );
}

export default App;
