import {
  get_all_games,
  search,
  reset,
  get_game_detail,
  set_games_on_page,
} from "../actions";

const initialState = {
  games: [],
  gamesOnPage: [],
  gameDetail: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case search:
      return {
        ...state,
        gamesOnPage: [...state.games, action.payload],
      };
    case get_all_games:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case reset:
      return {
        ...state,
        gamesOnPage: [],
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
    default:
      return state;
  }
}

export default reducer;
