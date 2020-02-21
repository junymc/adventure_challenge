import uuid from 'uuid'

function manageAdventure(state = [], action) {
    console.log(action)
    switch (action.type) {
        case 'SCRATCH_ADVENTURE':
            const adventure = {
                id: uuid(),
                name: action.name,
                scratch: true
            }
            return [...state, adventure]

        default:
            return state
    }
}

export default manageAdventure;