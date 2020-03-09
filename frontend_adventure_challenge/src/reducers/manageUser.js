function manageUser(state = {}, action) {
    switch(action.type) {
        case 'LOGIN_USER':
            console.log(action.payload)
            return action.payload
        
        case 'SIGNUP_USER':
            return action.payload

        case 'SET_USER':
            return action.payload

        case 'LOGOUT_USER':
            return null
        
        default:
            return state
    }
}

export default manageUser;