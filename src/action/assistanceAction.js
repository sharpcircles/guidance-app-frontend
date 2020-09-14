import { ASSISTANCE_LOAD, ASSISTANCE_UPDATE, ASSISTANCE_DELETE, ASSISTANCE_INFO_LOAD, ASSISTANCE_INFO_UPDATE } from "../utils/constant";

export const assistanceLoad = (data) => (dispatch, getState) => {
  dispatch({ type: ASSISTANCE_LOAD, payload: data })
}

export const assistanceUpdate = (data) => (dispatch, getState) => {
  dispatch({ type: ASSISTANCE_UPDATE, payload: data })
}

export const assistanceDelete = (data) => (dispatch, getState) => {
  dispatch({ type: ASSISTANCE_DELETE, payload: data })
}

export const assistanceInfoLoad = (data) => (dispatch, getState) => {
  dispatch({ type: ASSISTANCE_INFO_LOAD, payload: data })
}

export const assistanceInfoUpdate = (data) => (dispatch, getState) => {
  dispatch({ type: ASSISTANCE_INFO_UPDATE, payload: data })
}
