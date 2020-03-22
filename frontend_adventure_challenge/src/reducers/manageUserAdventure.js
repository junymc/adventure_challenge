function manageUserAdventure(state = {userAdventures: []}, action) {

    switch(action.type) {
        case 'CREATE_USER_ADVENTURE':
            return {...state, 
                        userAdventures: [...state.userAdventures, action.payload]
                    }

        default:
            return state
    }
}

export default manageUserAdventure;