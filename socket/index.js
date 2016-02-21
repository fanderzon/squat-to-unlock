import makeStore from './src/store';
import { startServer } from './src/server';

export const store = makeStore();
startServer(store);

store.subscribe(function() {
  console.log('new state', store.getState().games);
});

store.dispatch({
  type: 'CREATE_PLAYER',
  username: 'banana'
});
store.dispatch({
  type: 'CREATE_PLAYER',
  username: 'penguin'
});
store.dispatch({
  type: 'CREATE_PLAYER',
  username: 'fanderzon'
});
store.dispatch({
  type: 'CREATE_PLAYER',
  username: 'planting'
});

store.dispatch({
  type: 'CREATE_GAME',
  userId: 4,
  gameOptions: {
    type: 'squats',
    mode: 'qty',
    target: 80
  }
});

store.dispatch({
  type: 'CREATE_GAME',
  userId: 3
});

store.dispatch({
  type: 'JOIN_GAME',
  userId: 4,
  gameId: 2
});
