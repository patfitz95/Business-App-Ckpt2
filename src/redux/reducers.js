import { combineReducers } from 'redux'

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [ ...state, action.value ]
        case 'REMOVE_LISTING':
            let listing = [ ...state ]
            listing.splice(action.value, 1)
            return listing
        default:
            return state
    }
}

export default combineReducers({ listings })