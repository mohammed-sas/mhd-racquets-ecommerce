import Signup from "./pages/signup/Signup";
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
function App() {
  
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products-listing" element={<Products/>}/>
      </Routes>

    </div>
  );
}

export default App;
