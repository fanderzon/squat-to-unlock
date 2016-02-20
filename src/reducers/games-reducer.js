import objectAssign from 'object-assign';

function setState(state, newState) {
  return objectAssign( {}, state, newState );
}

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_GAMES_STATE':
      return setState(state, action.state);
  }
  return state;
}
