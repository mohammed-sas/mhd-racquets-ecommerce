import Signup from "./pages/signup/Signup";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import MockAPI from "./components/mockman/MockAPI";
import Wishlist from "./pages/wishlist/Wishlist";
function App() {
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products-listing" element={<Products/>}/>
        <Route path="/mock-api" element={<MockAPI/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
      </Routes>

    </div>
  );
}

export default App;
