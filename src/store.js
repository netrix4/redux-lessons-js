import { createStore } from "redux";

// const initialState = { clicks: 0, log: [] };
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const initialState = 0;

const clickCounter = (state = initialState, action) => {
  // return estadoActual
  switch (action.type) {
    case INCREMENT:
      return (state += 1);
    //   state.clicks += 1;
    //   state.log.push("increment");
    //   return state;

    case DECREMENT:
      return (state -= 1);
    //   state.clicks -= 1;
    //   state.log.push("decrement");
    //   return state;
    default:
      return state;
  }
};

export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });

// store.subscribe(() => {
//   console.log(store.getState());
// });

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());

// console.log(store.getState());

// store.dispatch(decrement());
// store.dispatch(decrement());

// console.log(store.getState());

const store = createStore(clickCounter);

export default store;
