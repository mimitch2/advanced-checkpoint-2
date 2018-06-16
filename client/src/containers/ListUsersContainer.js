import ListUsers from "../components/ListUsers";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
  

export default connect(mapStateToProps)(ListUsers);
