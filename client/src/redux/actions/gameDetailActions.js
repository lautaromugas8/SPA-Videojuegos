import axios from "axios";

export const GAME_DETAIL_REQUEST = "GAME_DETAIL_REQUEST";
export const GAME_DETAIL_SUCCESS = "GAME_DETAIL_SUCCESS";
export const GAME_DETAIL_FAIL = "GAME_DETAIL_FAIL";
export const RESET = "RESET";

export function getGameDetail(id) {
  return async function (dispatch) {
    dispatch({ type: GAME_DETAIL_REQUEST });
    try {
      const response = await axios.get(`/videogame/${id}`);
      dispatch({ type: GAME_DETAIL_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: GAME_DETAIL_FAIL, payload: error });
    }
  };
}

export function detailUnmount() {
  return { type: RESET };
}
