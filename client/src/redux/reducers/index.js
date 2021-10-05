import {
  get_all_games,
  search,
  reset,
  get_game_detail,
  set_games_on_page,
  set_filtered_games,
} from "../actions";

export const initialState = {
  games: [],
  filteredGames: [],
  gamesOnPage: [],
  gameDetail: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case search:
      return {
        ...state,
        gamesOnPage: [action.payload],
      };
    case get_all_games:
      return {
        ...state,
        games: [action.payload],
      };
    case get_game_detail:
      return {
        ...state,
        gameDetail: { ...state.gameDetail, ...action.payload },
      };
    case set_games_on_page:
      return {
        ...state,
        gamesOnPage: [action.payload],
      };
    case reset:
      return {
        ...state,
        gameDetail: {},
        filteredGames: [],
      };
    case set_filtered_games:
      return {
        ...state,
        filteredGames: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
