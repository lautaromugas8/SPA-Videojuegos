export const RESET = "RESET";
export const SET_FILTERED_GAMES = "SET_FILTERED_GAMES";

export function setFilteredGames(games) {
  return { type: SET_FILTERED_GAMES, payload: games };
}

export function resetFilteredGames() {
  return { type: RESET };
}
