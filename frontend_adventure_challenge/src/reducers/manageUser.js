function manageUser(state = "", action) {
    switch(action.type) {
        case 'LOGIN_USER':
            return action.payload.username
        
        case 'SIGNUP_USER':
            return action.payload.user.username

        case 'LOGOUT_USER':
            return null
        
        default:
            return state
    }
}

export default manageUser;