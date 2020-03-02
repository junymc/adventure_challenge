function manageUser(state = "", action) {
    switch(action.type) {
        case 'Log_IN_USER':
            return action.payload
        
        case 'SIGN_UP_USER':
            return action.payload
        
        default:
            return state
    }
}

export default manageUser;