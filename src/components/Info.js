import { connect } from "react-redux";
import {} from "../store";

export const Info = ({ clickCounter, userName }) => {
  return (
    <div>
      <p>Esto es Info</p>
      <h1>
        {userName} desde info con {clickCounter} clicks
      </h1>
    </div>
  );
};
const mapSateToProps = (state) => ({
  clickCounter: state.clickCounter,
  userName: state.user.name,
});
const mapDispatchToProps = (dispatch) => ({});
export default connect(mapSateToProps, mapDispatchToProps)(Info);
