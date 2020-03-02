function manageToken(state = "", action) {

    switch(action.type) {
        case 'GET_CSRF_TOKEN':
            return action.payload
        
        default:
            return state
    }
}

export default manageToken;