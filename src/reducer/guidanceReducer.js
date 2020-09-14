import { GUIDANCE_LOAD, GUIDANCE_UPDATE } from "../utils/constant";

const initialState = {
    guidanceData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GUIDANCE_LOAD: return {
            ...state
        }
        case GUIDANCE_UPDATE: return {
            ...state
        }
        default:
            return {...state}
            break
    }
}

export default reducer
