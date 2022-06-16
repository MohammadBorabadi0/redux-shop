import React from "react";

// Store
import store from "./redux/store";

// Provider
import { Provider } from "react-redux";

const App = () => {
  return <Provider store={store}>
    
  </Provider>;
};

export default App;
