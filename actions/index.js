import { getAllDecks, getDeck, saveDeck, saveCard } from "../utils/api";

export const RECEIVE_ALL_DECKS = "RECEIVE_ALL_DECKS";
export const RECEIVE_DECK = "RECEIVE_DECK";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD_TO_DECK = "ADD_CARD_TO_DECK";


function recieveDecks(decks) {
    return {
        type: RECEIVE_ALL_DECKS,
        decks
    }
}

export function handleRecieveDecks() {
    return ((dispatch) => {
        getAllDecks().then((decks) => {
            dispatch(recieveDecks(decks));
        });
    })
}

function addDeck(id, deck) {
    return {
        type: ADD_DECK,
        id,
        deck
    }
}

export function handleAddDeck(title) {
    return ((dispatch) =>{
        saveDeck(title).then(({id, deck}) => {
            dispatch(addDeck(id, deck));
        })
    })
}

function addCard(deckId, card) {
    return {
        type: ADD_CARD_TO_DECK,
        deckId,
        card
    }
}

export function handleAddCard(deckId, question, answer) {
    return ((dispatch) =>{
        saveCard(deckId, question, answer).then((card) => {
            dispatch(addCard(deckId, card));
        })
    })
}