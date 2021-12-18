import axios from "axios";

export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAIL = "SEARCH_FAIL";
export const SET_GAMES_ON_PAGE = "SET_GAMES_ON_PAGE";

export function searchGame(value) {
  return async function (dispatch) {
    dispatch({ type: SEARCH_REQUEST });
    try {
      const response = await axios.get(`/videogames?name=${value}`);
      dispatch({ type: SEARCH_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: SEARCH_FAIL, payload: error });
    }
  };
}

export function setGamesPerPage(num, games) {
  // if (Array.isArray(games)) {
  switch (num) {
    case 1:
      return { type: SET_GAMES_ON_PAGE, payload: games.slice(0, 15) };
    case 2:
      return { type: SET_GAMES_ON_PAGE, payload: games.slice(15, 30) };
    case 3:
      return { type: SET_GAMES_ON_PAGE, payload: games.slice(30, 45) };
    case 4:
      return { type: SET_GAMES_ON_PAGE, payload: games.slice(45, 60) };
    case 5:
      return { type: SET_GAMES_ON_PAGE, payload: games.slice(60, 75) };
    case 6:
      return { type: SET_GAMES_ON_PAGE, payload: games.slice(75, 90) };
    default:
      return;
  }
  // } else {
  //   switch (num) {
  //     case 1:
  //       return { type: SET_GAMES_ON_PAGE, payload: games.slice(0, 15) };
  //     case 2:
  //       return { type: SET_GAMES_ON_PAGE, payload: games.slice(15, 30) };
  //     case 3:
  //       return { type: SET_GAMES_ON_PAGE, payload: games.slice(30, 45) };
  //     case 4:
  //       return { type: SET_GAMES_ON_PAGE, payload: games.slice(45, 60) };
  //     case 5:
  //       return { type: SET_GAMES_ON_PAGE, payload: games.slice(60, 75) };
  //     case 6:
  //       return { type: SET_GAMES_ON_PAGE, payload: games.slice(75, 90) };
  //     case "creados": {
  //       const filtered = games.slice(0, 15);
  //       return { type: SET_GAMES_ON_PAGE, payload: filtered };
  //     }
  //     default:
  //       return;
  //   }
  // }
}
