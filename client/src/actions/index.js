


export function loadUsers() {
  return function (dispatch) {
    fetch("http://localhost:3001/users").then( (response) => {
      return response.json();
    }).then((users) => {
      dispatch(usersLoaded(users));
    });
  };
}
      
export function usersLoaded(users) {
  // console.log("usersLoaded");
  
  return {
    type: "USERS_LOADED",
    value: users
  };
}
  
// export function loadSearch(searchTerm) {
//   return function (dispatch) {
//     dispatch({
//       type: "LOAD_SEARCH"
//     });
//     fetch(`https://api.themoviedb.org/3/search/multi?query=${searchTerm}&api_key=302e3cac4334e8bc5a388a1ebc683dda`)
//       .then( (response) => {
//         return response.json();
//       }).then((movies) => {
//         dispatch(searchLoaded(movies));
//       });
//   };
// }
  
// export function searchLoaded(movies) {
//   return {
//     type: "SEARCH_RESULTS_LOADED",
//     value: movies.results
//   };
// }
  

export function createUser(user) {
  return function (dispatch) {
    console.log(JSON.stringify(user), "actions CreateUser");
    fetch("http://localhost:3001/user", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    }).then(() => {
      dispatch(loadUsers());
    });
  };
}
      
export function deleteUser(id) {
  return function (dispatch) {
    fetch("/user/" + id, {
      method: "DELETE"
    }).then(res => res.json())
        .then(() => {
          dispatch(loadUsers());
        });
  };
}
  
