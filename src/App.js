import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import { Provider } from "react-redux";
// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";
import ShopCart from "./components/ShopCart";
// Redux
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <Routes>
                <Route path="/products/:id" element={<ProductDetails />} />
                <Route path="/products" element={<Store />} />
                <Route path="/cart" element={<ShopCart />} />
                <Route path="*" element={<Navigate to="/products" />} />
            </Routes>
        </Provider>
    );
}

export default App;
