import uuid from 'uuid'

function manageEvidence(state = [], action) {
    console.log(action)
    switch (action.type) {
        case 'ADD_EVIDENCE':
            const evidence = {
                id: uuid(),
                description: action.evidence.description,
                adventureId: action.evidence.adventureId
            }
            return [...state, evidence]
        case 'DELETE_EVIDENCE':
            return { ...state, evidences: state.filter(evidence => evidence.id !== action.id)}

        default:
            return state
    }
}

export default manageEvidence;