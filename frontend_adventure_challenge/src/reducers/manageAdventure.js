import uuid from 'uuid'

function manageAdventure(state = { adventures: [], requesting: false }, action) {
    console.log(state)
    switch (action.type) {

        case 'ADVENTURES_REQUEST':
            return {...state, adventures: [...state.adventures], requesting: true}

        case 'ADD_ADVENTURES':
            return {...state, adventures: [...state.adventures], requesting: false}

        case 'SCRATCH_ADVENTURE':
            const adventure = {
                id: uuid(),
                name: state.adventures.adventure.name,
                scratch: true
            }
            return [...state, state.adventures.adventure, adventure]

        default:
            return state
    }
}

export default manageAdventure;