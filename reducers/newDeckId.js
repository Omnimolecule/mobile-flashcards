import { RECIEVE_NEW_DECK_ID, REMOVE_NEW_DECK_ID } from "../actions/newDeckId";

export default function newDeckId(state=null, action){
    switch(action.type){
        case RECIEVE_NEW_DECK_ID:
            return action.id;
        case REMOVE_NEW_DECK_ID:
            return null;
        default: 
            return state;
    }
}