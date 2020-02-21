import React from 'react'
import Evidence from './Evidence'

const Evidences = props => {

    const evidences = props.evidences.map(evidence => <Evidence key={evidence.id} evidence={evidence} />)

    return (
        <div>
            {evidences}
        </div>
    )
}

export default Evidences;