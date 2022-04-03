import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {
  FilterProvider,
  AuthProvider,
  CartProvider,
  WishlistProvider,
  AddressProvider,
} from "./context";
import { BrowserRouter } from "react-router-dom";

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
