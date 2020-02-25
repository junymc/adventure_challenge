import React from 'react'
import Evidence from './Evidence'

const Evidences = props => {
// each adventure has its own evidence 
console.log(props)
    const adventureEvidences = props.evidences.filter(evidence => evidence.adventureId === props.adventureId)
    const evidences = adventureEvidences.map(evidence => 
        <Evidence key={Math.random()} 
                  id={evidence.id} 
                  description={evidence.description} 
                  image={evidence.image} 
                  adventureId={evidence.adventureId}
                  deleteEvidence={props.deleteEvidence} />)

    return (
        <div>
            { evidences }
        </div>
    )
}

export default Evidences;