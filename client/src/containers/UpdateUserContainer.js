import UpdateUser from "../components/UpdateUser";
import { connect } from "react-redux";
import {updateUser} from "../actions";

function mapStateToProps(state) {
  return {
    users: state.users
  };
}
  
function mapDispatchToProps(dispatch) {
  return {
    updateUser: (user) => {      
      const action = updateUser(user);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(UpdateUser);
