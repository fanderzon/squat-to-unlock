import objectAssign from 'object-assign';

export function gamesReducer(state = [], action = { state: [] }) {
  switch (action.type) {
    case 'SET_GAMES':
      return [...action.state];
  }
  return state;
}

export function playersReducer(state = {}, action = {}) {
  switch (action.type) {
    case 'SET_PLAYERS':
      return objectAssign(
        {},
        state,
        action.state
      );
  }
  return state;
}

export function userReducer( state = {}, action ) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        username: action.username,
        avatar: action.avatar
      };
    case 'CREATE_USER_SUCCEEDED':
      return {
        id: action.payload.id,
        username: action.payload.username,
        avatar: action.payload.avatar
      }
  }
  return state;
}
