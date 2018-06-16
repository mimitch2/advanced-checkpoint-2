import CreateUser from "../components/CreateUser";
import { connect } from "react-redux";
import {createUser} from "../actions";

// function mapStateToProps(state) {
//   return {
//     // searchResults: state.searchResults,
//     // myMovieList: state.myMovieList
//   };
// }
  
function mapDispatchToProps(dispatch) {
  return {
    createUser: (user) => {
      console.log(user);
      
      const action = createUser(user);
      dispatch(action);
    },
  };
}

export default connect(null,mapDispatchToProps)(CreateUser);
