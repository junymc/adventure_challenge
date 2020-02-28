import { combineReducers } from 'redux'
import manageAdventure from './manageAdventure'
import manageEvidence from './manageEvidence'

const rootReducer = combineReducers({
    adventures: manageAdventure,
    evidences: manageEvidence
})

export default rootReducer;

