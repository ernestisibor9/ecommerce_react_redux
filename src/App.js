import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import AddItem from "./components/AddItem";
import Cart from "./components/Cart";
import Items from "./components/Items";
import Navbar from "./components/Navbar";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { Provider } from "react-redux";
import "./components/style.css"

function App() {
  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Items />} />
              <Route path="add_item" element={<AddItem />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </div>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
