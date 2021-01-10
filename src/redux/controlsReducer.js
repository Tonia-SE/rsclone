import { FETCH_CATEGORIES } from "./types"

const initialState = {
    //categoryId: 1,
    fetchedCategoires: []
}
export const controlsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORIES:
            return {...state, fetchedCategoires: action.payload}
        // case SET_CATEGORY:
        //     return {...state, categoryId: action.payload}
        default: return state
    }
}