import React from 'react'
import EvidencesContainer from '../../containers/EvidencesContainer'

const Adventure = props => {
    console.log(props)
    const  { adventure } = props

    return (
        <div>
            <li>
                <span>{adventure}</span><button onClick={() => props.scratchAdventure(adventure.id)}>Challenge!</button>
                <EvidencesContainer adventure={adventure} />
            </li>
        </div>
    )
}

export default Adventure;