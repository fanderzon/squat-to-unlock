import objectAssign from 'object-assign';

export default function(state = {}, action) {
  switch (action.type) {
    case 'SET_GAMES':
      return action.state;
  }
  return state;
}
