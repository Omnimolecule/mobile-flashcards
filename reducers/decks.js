import { RECEIVE_ALL_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from "../actions/decks";


export default function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:
            return {
                ...state,
                [action.id]: action.deck
            }
        case ADD_CARD_TO_DECK: 
            let card = action.card;
            return {
                ...state,
                [action.deckId]: {
                    ...state[action.deckId],
                    cards: [
                        ...state[action.deckId].cards,
                        card
                    ]
                }
            }
        default:
            return state;
    }
}