import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { FilterProvider } from "./context/filter-context";
import { AuthProvider } from "./context/auth-context";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./context/cart-context";
import { WishlistProvider } from "./context/wishlist-context";
import { AddressProvider } from "./context/address-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <FilterProvider>
          <WishlistProvider>
            <AddressProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </AddressProvider>
          </WishlistProvider>
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
