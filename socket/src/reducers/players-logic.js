let playerCounter = 1;
export function getPlayerId() {
  return playerCounter++;
}

// FIXME: Very naive player handling with no validation
export function addPlayer( state, username ) {
  return [
    ...state,
    {
      playerId: getPlayerId(),
      username
    }
  ]
}
