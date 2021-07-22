import {UPDATE_CURRENT_PAGE,
        UPDATE_PROJECT_PAGE_FADE_LEFT} from '../actions/types.js'

const initState = {
    currentPage: 0,
    projectPageLeftFade: false
}

const rootReducer = (state = initState, action) => {
    switch(action.type){
        case UPDATE_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        case UPDATE_PROJECT_PAGE_FADE_LEFT:
            return{
                ...state,
                projectPageLeftFade: action.payload
            }
        default:
            return state;
    }

}

export default rootReducer;