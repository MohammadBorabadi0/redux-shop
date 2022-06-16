import React from "react";

// Store
import store from "./redux/store";
// Provider
import { Provider } from "react-redux";
// Components
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  return (
    <Provider store={store}>
      <ProductList />
    </Provider>
  );
};

export default App;
