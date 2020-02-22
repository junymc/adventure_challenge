import React from 'react'
import Evidence from './Evidence'

const Evidences = props => {
// each adventure has its own evidence 
    const adventureEvidenses = props.evidences.filter(evidence => evidence.adventureId === props.adventureId)
    const evidences = adventureEvidenses.map(evidence => <Evidence key={evidence.id} evidence={evidence} deleteEvidence={props.deleteEvidence} />)

    return (
        <div>
            { evidences }
        </div>
    )
}

export default Evidences;