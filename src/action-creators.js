export const CREATE_USER = 'CREATE_USER';
export const SET_GAMES = 'SET_GAMES';
export const SET_PLAYERS = 'SET_PLAYERS';
export const SET_GUID = 'SET_GUID';
import { routeActions } from 'react-router-redux';

export function goTo( path ) {
  console.log( 'goTo', path );
  return routeActions.push( path );
}

export function setGames( state ) {
  return {
    type: SET_GAMES,
    state
  }
}

export function setPlayers( state ) {
  return {
    type: SET_PLAYERS,
    state
  }
}

export function setGuid( state ) {
  return {
    type: SET_PLAYERS,
    state
  }
}

export function createUser( username, avatar ) {
  console.log('createPlayer action creator', username, avatar);
  return {
    type: CREATE_USER,
    meta: {
      remote: true
    },
    username,
    avatar
  };
}
