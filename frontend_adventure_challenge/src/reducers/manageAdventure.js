import uuid from 'uuid'

function manageAdventure(state = { adventures: [], requesting: false }, action) {
    console.log(action)
    switch (action.type) {

        case 'ADVENTURES_REQUEST':
            return {...state, adventures: [...state.adventures], requesting: true}

        case 'ADD_ADVENTURES':
            return {...state, adventures: action.adventures, requesting: false}

        case 'SCRATCH_ADVENTURE':
            const adventure = {
                id: uuid(),
                scratch: true
            }
            return [...state, state.adventures.adventure, adventure]

        default:
            return state
    }
}

export default manageAdventure;