let playerCounter = 1;
export function getPlayerId() {
  return playerCounter++;
}

// FIXME: Very naive player handling with no validation
export function createPlayer( state, username, avatar ) {
  console.log('creating new player on server', username, avatar );
  return [
    ...state,
    {
      playerId: getPlayerId(),
      username,
      avatar
    }
  ]
}
