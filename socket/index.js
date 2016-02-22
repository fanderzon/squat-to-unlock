import makeStore from './src/store';
import { startServer } from './src/server';

export const store = makeStore();
startServer(store);

store.subscribe(function() {
  // console.log('new state', store.getState().games);
});
