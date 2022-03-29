import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./cart-context";
import { useWishlist } from "./wishlist-context";

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const auth = useProvideAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

const useProvideAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const {cartDispatch} = useCart();
  const {wishlistDispatch} = useWishlist();
  const navigate = useNavigate();
  const signup = async (user) => {
    try {
      let response = await axios.post("/api/auth/signup", user);
      localStorage.setItem("token", response.data.encodedToken);
      setCurrentUser(response.data.createdUser);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  const signin = async (user) => {
    try {
      let response = await axios.post("/api/auth/login", user);
      localStorage.setItem("token", response.data.encodedToken);
      setCurrentUser(response.data.foundUser);
      return response.status;
    } catch (error) {
      console.log(error);
    }
  };

  const signout = () => {
    localStorage.setItem("token", null);
    setCurrentUser(null);
    cartDispatch({type:"CLEAR_CART"});
    wishlistDispatch({type:"CLEAR_WISHLIST"});
    navigate("/");
  };
  return { currentUser, signup, signin, signout };
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
