import {lazy} from 'react'

const Home =lazy(()=>import("./home/Home"));
const Login =lazy(()=>import("./login/Login"));
const Cart =lazy(()=>import("./cart/Cart"));
const Products =lazy(()=>import("./products/Products"));
const Wishlist =lazy(()=>import("./wishlist/Wishlist"));
const SingleProduct =lazy(()=>import("./single product/SingleProduct"));
const OrderSummary =lazy(()=>import("./order summary/OrderSummary"));
const Profile =lazy(()=>import("./profile/Profile"));
const Signup =lazy(()=>import("./signup/Signup"));
const NotFound =lazy(()=>import('./not found/NotFound'));

export {
  Home,
  Login,
  Cart,
  Products,
  Wishlist,
  SingleProduct,
  OrderSummary,
  Profile,
  Signup,
  NotFound
};
