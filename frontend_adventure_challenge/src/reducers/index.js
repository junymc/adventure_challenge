import { combineReducers } from 'redux'
import manageAdventure from './manageAdventure'
import manageEvidence from './manageEvidence'
import manageToken from './manageToken'
import manageUser from './manageUser'
import manageUserAdventure from './manageUserAdventure'

const rootReducer = combineReducers({
    adventures: manageAdventure,
    evidence: manageEvidence,
    csrf_token: manageToken,
    user: manageUser,
    userAdventure: manageUserAdventure
})

export default rootReducer;

