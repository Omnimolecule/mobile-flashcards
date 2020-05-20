export const RECIEVE_NEW_DECK_ID = 'RECIEVE_NEW_DECK_ID';
export const REMOVE_NEW_DECK_ID = 'REMOVE_NEW_DECK_ID';

export function receiveNewDeckId(id) {
    return {
        type: RECIEVE_NEW_DECK_ID,
        id
    }
}

export function removeNewDeckId(){
    return {
        type: REMOVE_NEW_DECK_ID
    }
}