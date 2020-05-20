import { saveDeck } from "../utils/api";
import { addDeck } from "./decks";
import { receiveNewDeckId } from "./newDeckId";

export function handleAddDeck(title) {
    return ((dispatch) => {
        saveDeck(title).then(({ id, deck }) => {
            dispatch(addDeck(id, deck));
            dispatch(receiveNewDeckId(id));
        })
    })
}
