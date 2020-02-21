import uuid from 'uuid'

function manageEvidence(state = [], action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_EVIDENCE':
            const evidence = {
                id: uuid(),
                name: action.name
            }
            return [...state, evidence]
        // case 'DELETE_EVIDENCE':
        //     return { evidences: state.filter(evidence => evidence.id !== action.id)}

        default:
            return state
    }
}

export default manageEvidence;