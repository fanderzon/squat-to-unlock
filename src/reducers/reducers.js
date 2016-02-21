export function gamesReducer(state = [], action = { state: [] }) {
  switch (action.type) {
    case 'SET_GAMES':
      return [...action.state];
  }
  return state;
}

export function playersReducer(state = [], action = {}) {
  action.state = Array.isArray(action.state) ? action.state : [];
  switch (action.type) {
    case 'SET_PLAYERS':
      return [...action.state];
  }
  return state;
}

export function userReducer( state = {}, action ) {
  switch (action.type) {
    case 'CREATE_PLAYER':
    console.log('userReducer CREATE_PLAYER', action);
      return {
        username: action.username,
        avatar: action.avatar
      };
  }
  return state;
}
