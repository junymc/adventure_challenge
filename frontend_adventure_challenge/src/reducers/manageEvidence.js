// import uuid from 'uuid'

function manageEvidence(state = {}, action) {
    
    switch (action.type) {
        case 'ADD_EVIDENCE':
            console.log(action.payload)
            return {...state, ...action.payload}

        case 'SET_EVIDENCE':
            return {...state, ...action.payload}
           
        case 'DELETE_EVIDENCE':
            return { ...state, ...state.evidences.filter(evidence => evidence.id !== action.id)}

        default:
            return state
    }
}

export default manageEvidence;