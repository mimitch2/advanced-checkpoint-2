import ListUsers from "../components/ListUsers";
import { connect } from "react-redux";
import {deleteUser} from "../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUser: (id) => {      
      const action = deleteUser(id);
      dispatch(action);
    },
  };
}
  

export default connect(mapStateToProps, mapDispatchToProps)(ListUsers);
