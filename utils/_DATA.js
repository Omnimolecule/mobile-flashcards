let decks = {
    "vxcbnl5204drcnou0o0pu": {
        title: "French - Vegetables & Fruits",
        cards: [
            {
                question: "Tomato",
                answer: "la tomate"
            },
            {
                question: "Salad",
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

export const DECKS_STORAGE_KEY = "MobileFlashcard:decks"

export function generateUID() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getInitialData() {
    return decks;
}