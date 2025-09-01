import { createStore } from "redux";

const initialState = { clicks: 0, log: [] };

const clickCounter = (state = initialState, action) => {
  // return estadoActual
  switch (action.type) {
    case "INCREMENT":
      //   return (state -= 1);
      state.clicks += 1;
      state.log.push("increment");
      return state;

    case "DECREMENT":
      //   return (state -= 1);
      state.clicks -= 1;
      state.log.push("decrement");
      return state;
    default:
      return state;
  }
};

const increment = () => ({ type: "INCREMENT" });
const decrement = () => ({ type: "DECREMENT" });

const store = createStore(clickCounter);
store.subscribe(() => {
  console.log(store.getState());
});


store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
// console.log(store.getState());

store.dispatch(decrement());
store.dispatch(decrement());
// console.log(store.getState());

export default store;
