import objectAssign from 'object-assign';

export function addPlayer( state, player ) {
  let playerObj = {};
  playerObj[player.id] = {
    username: player.username,
    avatar: player.avatar
  }
  return objectAssign(
    {},
    state,
    playerObj
  );
}
