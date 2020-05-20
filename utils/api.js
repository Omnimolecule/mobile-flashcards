
import { _getInitialData, DECKS_STORAGE_KEY, generateUID } from "./_DATA";
import AsyncStorage from '@react-native-community/async-storage'

export function getAllDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY)
        .then(checkDeckInitialization);
}

function checkDeckInitialization(result) {
    if (result === null) {
        let initialData = _getInitialData();
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(initialData));
        return initialData;
    }
    return JSON.parse(result);
}

export function getDeck(id) {
    return getAllDecks().then((decks) => (decks[id]));
}

export function saveDeck(title) {
    let id = generateUID();
    let newDeck = {
        title,
        cards: []
    };
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [id]: newDeck
    })).then(() => ({ id, deck: newDeck }))
}

export function saveCard(deckId, question, answer) {
    return getDeck(deckId).then((deck) => {
        console.log(deck);
        let newCard = {
            question,
            answer
        }
        return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [deckId]: {
                cards: [
                    ...deck.cards,
                    newCard
                ]
            }
        })).then(() => (newCard));
    })
}