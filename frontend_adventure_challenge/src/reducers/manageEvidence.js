// import uuid from 'uuid'

function manageEvidence(state = {}, action) {
    
    switch (action.type) {
        case 'ADD_EVIDENCE':
            console.log(action.payload)
            // state = {evidence: {…}} which is evidence: {evidence: {…}, adventureId: "9"}
            // which is evidence: {evidence: {description: "aaa", image: "ss"}, adventureId: "9"}
            return {...state, evidence: action.evidence }

        case 'SET_EVIDENCE':
            return {...state, }
           
        case 'DELETE_EVIDENCE':
            return { ...state, evidence: state.evidences.filter(evidence => evidence.id !== action.id)}

        default:
            return state
    }
}

export default manageEvidence;