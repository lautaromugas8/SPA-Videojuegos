import axios from "axios";

export const ALL_GAMES_REQUEST = "ALL_GAMES_REQUEST";
export const ALL_GAMES_SUCCESS = "ALL_GAMES_SUCCESS";
export const ALL_GAMES_FAIL = "ALL_GAMES_FAIL";

export function getAllGames() {
  return async function (dispatch) {
    dispatch({ type: ALL_GAMES_REQUEST });
    try {
      const response = await axios.get("/videogames");
      dispatch({ type: ALL_GAMES_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: ALL_GAMES_FAIL, payload: error });
    }
  };
}
