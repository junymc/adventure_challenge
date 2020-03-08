function manageUserAdventure(state = {}, action) {

    switch(action.type) {
        case 'CREATE_USER_ADVENTURE':
            return {...state, 
                        userAdventure: 
                        {
                            user_id: action.payload.user_id,
                            adventure_id: action.payload.adventure_id
                        }
                    }

        default:
            return state
    }
}

export default manageUserAdventure;