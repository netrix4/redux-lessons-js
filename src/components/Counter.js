import { connect } from "react-redux";
import { decrement, increment } from "../store";

export const Counter = ({ increment, decrement, clickCounter, userName }) => {
  const onIncrement = () => {
    increment();
  };
  const onDecrement = () => {
    decrement();
  };
  return (
    <div>
      <p>Esto es Counter</p>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <h1>{clickCounter}</h1>

      <h1>{userName}</h1>
    </div>
  );
};
const mapSateToProps = (state) => ({
  increment,
  decrement,
  clickCounter: state.clickCounter,
  userName: state.user.name,
});
const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement()),
});
export default connect(mapSateToProps, mapDispatchToProps)(Counter);
