import classes from './app.module.css'
import Signup from "./pages/signup/Signup";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import MockAPI from "./components/mockman/MockAPI";
import Wishlist from "./pages/wishlist/Wishlist";
import SingleProduct from "./pages/single product/SingleProduct";
import Navbar from "./components/Navbar/Navbar";
import Profile from './pages/profile/Profile';
import OrderSummary from './pages/order summary/OrderSummary';
function App() {
  
  return (
    <div className={classes["app-container"]}>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products-listing" element={<Products/>}/>
        <Route path="/mock-api" element={<MockAPI/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/product/:productId" element={<SingleProduct/>}/>
        <Route path="/profile/address" element={<Profile/>} />
        <Route path="/order-summary" element={<OrderSummary/>}/>
      </Routes>

    </div>
  );
}

export default App;
