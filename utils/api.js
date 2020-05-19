
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
    return result;
}

export function getDeck(id) {
    return getAllDecks().then((decks) => decks[id]);
}

export function saveDeck(title) {
    let id = generateUID();
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [id]: {
            title
        }
    }))
}

export function saveCard(deckId, question, answer) {
    return getDeck(deckId).then((deck) => AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify({
        [deckId]: {
            cards: [...deck.cards, {
                question,
                answer
            }]
        }
    })))    
}

/* 

export function submitEntry({ entry, key }) {
    console.log('tat ', key)
    return AsyncStorage.mergeItem(CALENDAR_STORAGE_KEY, JSON.stringify({
        [key]: entry
    }));
}

export function removeEntry(key) {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
        .then((results) => {
            const data = JSON.parse(results);
            data[key] = undefined;
            delete data[key];
            AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
        });
} 

export function _getDecks() {
    return new Promise((res, rej) => {
        setTimeout(() => res({...decks}), 1000);
    })
}

export function _getDeck(id) {
    return new Promise((res, rej) => {
        setTimeout(() => res(decks[id]), 1000);
    })
}

export function _saveDeck(title) {
    return new Promise((res, rej) => {
        let id = generateUID();
        setTimeout(() => {
            decks = {
                ...decks,
                [id]: {
                    title,
                    cards: []
                }
            }
            res();
        }, 1000)
    })
}

export function _saveCard({deckId, question, answer}) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            decks = {
                ...decks,
                [deckId]: {
                    ...decks[deckId],
                    cards: [
                        ...decks[deckId].cards,
                        {
                            question,
                            answer
                        }
                    ]
                }
            }
        }, 1000);

        res();
    })
}


*/