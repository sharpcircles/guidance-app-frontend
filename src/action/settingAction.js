import { USER_LOAD, USER_UPDATE, USER_CLEAR } from "../utils/constant";

export const userLoad = (data) => (dispatch, getState) => {
  dispatch({ type: USER_LOAD, payload: data })
}

export const userUpdate = (data) => (dispatch, getState) => {
  dispatch({ type: USER_UPDATE, payload: data })
}

export const userClear = (data) => (dispatch, getState) => {
  dispatch({ type: USER_CLEAR, payload: data })
}
