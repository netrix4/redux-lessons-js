import { React } from "react";

import { connect } from "react-redux";

import { decrement, increment } from "../store";
export const Counter = (props) => {
  const onIncrement = () => {
    props.increment();
  };
  const onDecrement = () => {
    props.decrement();
  };
  return (
    <div>
      <p>Esto es Counter</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <h1>{props.state}</h1>
      {/* <h1>{props.state.log}</h1> */}
    </div>
  );
};
const mapSateToProps = (state) => ({ state });
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});
export default connect(mapSateToProps, mapDispatchToProps)(Counter);
