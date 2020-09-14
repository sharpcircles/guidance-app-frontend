import { GUIDANCE_LOAD, GUIDANCE_UPDATE } from "../utils/constant";

export const guidanceLoad = (data) => (dispatch, getState) => {
  dispatch({ type: GUIDANCE_LOAD, payload: data })
}

export const guidanceUpdate = (data) => (dispatch, getState) => {
  dispatch({ type: GUIDANCE_UPDATE, payload: data })
}
