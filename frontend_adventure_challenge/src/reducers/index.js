import { combineReducers } from 'redux'
import manageAdventure from './manageAdventure'
import manageEvidence from './manageEvidence'
import manageToken from './manageToken'
import manageUser from './manageUser'

const rootReducer = combineReducers({
    adventures: manageAdventure,
    evidence: manageEvidence,
    csrf_token: manageToken,
    user: manageUser
})

export default rootReducer;

