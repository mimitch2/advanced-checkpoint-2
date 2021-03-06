import {combineReducers} from "redux";

function users(state = [], action) {
  if (action.type === "USERS_LOADED") {
    return action.value;
  }
  return state;
}

// function /* myMovieList */(state = [], action) {
//   if (action.type === /* "MY_MOVIE_LIST_LOADED" */) {
//     return action.value;
//   }
//   return state;
// }

const rootReducer = combineReducers({
  users
});

export default rootReducer;
