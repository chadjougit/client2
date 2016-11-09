import { ActionReducer, Action } from '@ngrx/store';


/* Clock Reducers */
export const HOUR = 'HOUR';
export const SECOND = 'SECOND';
export const clockReducer: ActionReducer<Date> = (state = new Date(), {type, payload} = { type: ""}) => {
    const date = new Date(state.getTime());
    switch (type) {
        case SECOND:
            date.setSeconds(date.getSeconds() + payload)
            return date;
        case HOUR:
            // console.log("Payload: ", payload);
            date.setHours(date.getHours() + payload)
            return date;
        default:
            return state;
    }
    
}


export interface PeopleState {
    name: string,
    time: Date
}