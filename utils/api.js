import { _getDeck, _getDecks, _saveCard, _saveDeck } from "./_DATA";

export function getAllDecks() {
    return _getDecks();
}

export function getDeck(id) {
    return _getDeck(id);
}

export function saveDeck(title) {
    return _saveDeck(title);
}

export function saveCard(deckId, question, answer) {
    return _saveCard({deckId, question, answer});
}