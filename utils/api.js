
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
    return getAllDecks().then((decks) => decks[id]);
}

export function saveDeck(title) {
    let id = generateUID();
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [id]: {
            title,
            cards: []
        }
    }))
}

export function saveCard(deckId, question, answer) {
    return getDeck(deckId).then((deck) => {
        debugger
        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
            [deckId]: {
                cards: [...deck.cards, {
                    question,
                    answer
                }]
            }
        }))
    })
}