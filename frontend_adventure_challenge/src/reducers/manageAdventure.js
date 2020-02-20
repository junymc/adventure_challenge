import uuid from 'uuid'

function manageAdventure(state = {
    adventures: []
}, action) {
    console.log(action)
    switch (action.type) {
        case 'SCRATCH_ADVENTURE':
            const adventure = {
                id: uuid(),
                name: action.name,
                scratch: true
            }
            return { ...state, adventures: [...state.adventures, adventure] }

        default:
            return state
    }
}

export default manageAdventure;