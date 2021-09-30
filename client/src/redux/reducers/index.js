import { get_all_games, search, reset, get_game_detail } from "../actions";

const initialState = {
  games: [],
  gameDetail: {},
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case search:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case get_all_games:
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case reset:
      return initialState;
    case get_game_detail:
      return {
        ...state,
        gameDetail: { ...state.gameDetail, ...action.payload },
      };
    default:
      return state;
  }
}

export default reducer;
