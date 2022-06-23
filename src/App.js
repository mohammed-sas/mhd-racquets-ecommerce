import classes from "./app.module.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Navbar, RequireAuth } from "./components";
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
  NotFound,
} from "./pages";
import { Suspense } from "react";
function App() {
  return (
    <div className={classes["app-container"]}>
      <Navbar />
      <Suspense fallback={<span class="loader"></span>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/cart"
            element={
              <RequireAuth>
                <Cart />
              </RequireAuth>
            }
          />
          <Route path="/products-listing" element={<Products />} />
          <Route path="/mock-api" element={<Mockman />} />
          <Route
            path="/wishlist"
            element={
              <RequireAuth>
                <Wishlist />
              </RequireAuth>
            }
          />
          <Route path="/product/:productId" element={<SingleProduct />} />
          <Route
            path="/profile/*"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route
            path="/order-summary"
            element={
              <RequireAuth>
                <OrderSummary />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
