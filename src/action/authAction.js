import { SIGNIN, SIGNUP, SIGNOUT } from "../utils/constant";

export const signIn = (data) => (dispatch, getState) => {
  dispatch({ type: SIGNIN, payload: data })
}

export const signUp = (data) => (dispatch, getState) => {
  dispatch({ type: SIGNUP, payload: data })
}

export const signOut = (data) => (dispatch, getState) => {
  dispatch({ type: SIGNOUT, payload: data })
}
