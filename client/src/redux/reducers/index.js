const initialState = {
  games: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "search":
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case "get_all_games":
      return {
        ...state,
        games: [...state.games, action.payload],
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default reducer;
