import React from 'react'
import Evidence from './Evidence'

const Evidences = props => {
// each adventure has its own evidence 
    const adventureEvidences = props.evidences.filter(evidence => evidence.adventureId === props.adventureId)
    const evidences = adventureEvidences.map(evidence => <Evidence key={evidence.id} description={evidence.description} image={evidence.image} deleteEvidence={props.deleteEvidence} />)

    return (
        <div>
            { evidences }
        </div>
    )
}

export default Evidences;