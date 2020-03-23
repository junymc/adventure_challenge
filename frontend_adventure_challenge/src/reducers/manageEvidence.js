// import uuid from 'uuid'

function manageEvidence(state = {evidences: []}, action) {
    
    switch (action.type) {
        case 'ADD_EVIDENCE':
            console.log(action.payload)
            return {...state, evidences: [...state.evidences, action.payload]}

        case 'SET_EVIDENCE':
            return {evidences: action.payload}
           
        case 'DELETE_EVIDENCE':
            console.log(action.id)
            // console.log(state) state is what user just deleted..
            return {...state, evidences: [...state.evidences.filter(evidence => evidence.id !== action.id)]}

        default:
            return state
    }
}

export default manageEvidence;