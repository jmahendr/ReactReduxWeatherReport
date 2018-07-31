import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action) {

    //this block cathes error if the promise does not resolve
    if(action.error) {
        return state;
    }
    
    switch(action.type) {
        case FETCH_WEATHER:
            //never mutate the existing state, but
            //create a new one as below with expand ES6 operator
            return [action.payload.data, ...state];
    }
    return state;
}