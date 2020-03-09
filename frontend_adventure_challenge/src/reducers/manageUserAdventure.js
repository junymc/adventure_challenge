function manageUserAdventure(state = {}, action) {

    switch(action.type) {
        case 'CREATE_USER_ADVENTURE':
            return {...state, 
                        ...action.payload
                    }

        default:
            return state
    }
}

export default manageUserAdventure;