import { createStore } from 'redux';
import { reducer } from './reducers/reducer.js';

export default function makeStore() {
  return createStore(reducer);
}
