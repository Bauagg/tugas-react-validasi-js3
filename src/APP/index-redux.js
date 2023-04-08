import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers/state-Redux";
import thunk from "redux-thunk";

const reducers = combineReducers({
    items: userReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store;
