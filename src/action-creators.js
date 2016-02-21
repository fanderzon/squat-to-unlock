export const CREATE_PLAYER = 'CREATE_PLAYER';
export const SET_GAMES = 'SET_GAMES';
export const SET_PLAYERS = 'SET_PLAYERS';

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

export function createPlayer( username, avatar ) {
  console.log('createPlayer action creator', username, avatar);
  return {
    type: CREATE_PLAYER,
    meta: {
      remote: true
    },
    username,
    avatar
  };
}
