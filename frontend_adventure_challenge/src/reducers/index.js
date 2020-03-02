import { combineReducers } from 'redux'
import manageAdventure from './manageAdventure'
import manageEvidence from './manageEvidence'
import manageToken from './manageToken'

const rootReducer = combineReducers({
    adventures: manageAdventure,
    evidence: manageEvidence,
    csrf_token: manageToken
})

export default rootReducer;

