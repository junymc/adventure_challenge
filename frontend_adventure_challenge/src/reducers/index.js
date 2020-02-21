import { combineReducers } from 'redux'
import manageAdventure from './manageAdventure'
import manageEvidence from './manageEvidence'

export default combineReducers({
    adventures: manageAdventure
})

