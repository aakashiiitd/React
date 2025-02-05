import * as ActionTypes from './ActionTypes'

export const Leaders = (state = { errMess: null, leaders:[],isLoading:true}, action) => {
    switch(action.type){
        case ActionTypes.ADD_LEADER:
            return{...state, isLoading:false, errMess: null, leaders: action.payload};
        
        case ActionTypes.LEADERS_LOADING:
            return{...state,isLoading:true, errMess:null, leaders: []};
        
        case ActionTypes.LEADERS_FAILED:
            return{...state, isLoading:false, errMess: action.payload};
        default:
            return state
    }
}