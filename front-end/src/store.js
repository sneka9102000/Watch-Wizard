import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer,productDetailsReducer, newReviewReducer,newProductReducer} from "./reducers/productReducer";
import { userReducer,profileReducer } from "./reducers/userReducer";
import {myOrdersReducer,orderDetailsReducer} from "./reducers/orderReducer";

const reducer = combineReducers({
  products:productsReducer,
  productDetails:productDetailsReducer,
  user:userReducer,
  profile: profileReducer,
  myOrders:myOrdersReducer,
  orderDetails: orderDetailsReducer,

});

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

