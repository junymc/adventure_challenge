// import uuid from 'uuid'

function manageEvidence(state = {}, action) {
    
    switch (action.type) {
        case 'ADD_EVIDENCE':
            console.log(action.payload)
            return {...state, ...action.payload}

        case 'SET_EVIDENCE':
            return {...action.payload}
           
        case 'DELETE_EVIDENCE':
            console.log(action)
            // console.log(state) state is what user just deleted..
            return { ...state, ...state.evidence.filter(evidence => evidence.id !== action.id)}

        default:
            return state
    }
}

export default manageEvidence;