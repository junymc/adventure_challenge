function manageToken(state = "", action) {

    switch(action.type) {
        case 'GET_CSRF_TOKEN':
            return action.payload

        case 'CLEAR_TOKEN':
            return null
        
        default:
            return state
    }
}

export default manageToken;