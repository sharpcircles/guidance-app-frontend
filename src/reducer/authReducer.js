import { SIGNIN, SIGNUP, SIGNOUT } from "../utils/constant";

const initialState = {
    authData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN: return {
            ...state
        }
        case SIGNUP: return {
            ...state
        }
        case SIGNOUT: return {
            ...state
        }
        default:
            return {...state}
            break
    }
}

export default reducer
