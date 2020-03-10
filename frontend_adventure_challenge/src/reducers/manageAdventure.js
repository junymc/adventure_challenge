// import uuid from 'uuid'

function manageAdventure(state = { adventures: [], requesting: false }, action) {
    console.log(state)
    // state ={adventures: Array(0), requesting: true}
    
    switch (action.type) {

        case 'ADVENTURES_REQUEST':
            return {...state, requesting: true}

        case 'ADD_ADVENTURES':
            console.log(action.adventures)
            return {adventures: action.adventures, requesting: false}

        case 'SCRATCH_ADVENTURE':
            const updatedAdventures = [...state.adventures]
            const adventureToUpdate = updatedAdventures.find(a => a.id === action.id)
            adventureToUpdate.scratch = true

            return {...state, adventures: updatedAdventures}

        default:
            return state
    }
}

export default manageAdventure;