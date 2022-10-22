import productsReducer from "./products/productReducer";
import cartReducer from "./cart/cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer,
});

export default rootReducer;
