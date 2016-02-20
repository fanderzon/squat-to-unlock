export function gamesReducer(state = [], action = { state: [] }) {
  console.log('gamesReducer', state, action);
  switch (action.type) {
    case 'SET_GAMES':
      return [...action.state];
  }
  return state;
}

export function playersReducer(state = [], action = {}) {
  action.state = Array.isArray(action.state) ? action.state : [];
  console.log('playersReducer', state, action);
  switch (action.type) {
    case 'SET_PLAYERS':
      return [...action.state];
  }
  return state;
}
