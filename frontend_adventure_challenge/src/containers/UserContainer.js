import React from 'react'
import AdventureEvidence from '../components/evidences/AdventureEvidence'
import Evidence from '../components/evidences/Evidence'
import EvidenceInput from '../components/evidences/EvidenceInput'

class UserContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <AdventureEvidence />
                <Evidence />
            </div>
        )
    }
}

export default UserContainer;