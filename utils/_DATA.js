let decks = {
    "vxcbnl5204drcnou0o0pu": {
        title: "French - Vegetables & Fruits",
        cards: [
            {
                question: "Tomato",
                answer: "la tomate"
            },
            {
                qestion: "Salad",
                answer: "la salade"
            },
            {
                question: "Apple",
                answer: "la pomme"
            }
        ]
    },
    "hv13h2izo7h8g8px1gdtg8": {
        title: "German - Professions",
        cards: [
            {
                question: "policeman",
                ansewr: "der Polizist / die Polizistin"
            },
            {
                question: "postman",
                answer: "der Briefträger / die Briefträgerin"
            }
        ]
    }
}

function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
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