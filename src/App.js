import React from "react";

// React-Router-Dom
import { Routes, Route } from "react-router-dom";
// Store
import store from "./redux/store";
// Provider
import { Provider } from "react-redux";
// Components
import ProductList from "./components/ProductList/ProductList";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Provider>
  );
};

export default App;
