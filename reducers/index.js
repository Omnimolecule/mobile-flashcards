import { RECEIVE_ALL_DECKS, RECEIVE_DECK, ADD_DECK, ADD_CARD_TO_DECK } from "../actions";

export default function flashcards(state = {}, action) {
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
    }
}