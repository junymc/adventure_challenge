import React from 'react'

const Evidence = props => {
    console.log(props)
    const { evidence } = props
    return (
        <div>
            <li>
                <span>{evidence.description}</span><button onClick={() => props.deleteEvidence(evidence.id)}>X</button>
            </li>
        </div>
    )
}

export default Evidence;