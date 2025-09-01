import { createStore } from "redux";

import combineReducers from "./reducers";
import { INCREMENT, DECREMENT } from "./reducers/Counter";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// const reducerPrincipal = combineReducers({ clickCounter, user });

const store = createStore(combineReducers);

export default store;
