import { USER_LOAD, USER_UPDATE, USER_CLEAR } from "../utils/constant";

const initialState = {
    settingData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOAD: return {
            ...state
        }
        case USER_UPDATE: return {
            ...state
        }
        case USER_CLEAR: return {
            ...state
        }
        default:
            return {...state}
            break
    }
}

export default reducer
