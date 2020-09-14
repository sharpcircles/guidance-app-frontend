import { ASSISTANCE_LOAD, ASSISTANCE_UPDATE, ASSISTANCE_DELETE, ASSISTANCE_INFO_LOAD, ASSISTANCE_INFO_UPDATE } from "../utils/constant";

const initialState = {
    assistanceData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ASSISTANCE_LOAD: return {
            ...state
        }
        case ASSISTANCE_UPDATE: return {
            ...state
        }
        case ASSISTANCE_DELETE: return {
            ...state
        }
        case ASSISTANCE_INFO_LOAD: return {
            ...state
        }
        case ASSISTANCE_INFO_UPDATE: return {
            ...state
        }
        default:
            return {...state}
            break
    }
}

export default reducer
