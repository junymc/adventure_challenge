import React from 'react'

const Adventure = props => {
    return (
        <div>
            <li>
                <span>{props.adventure.name}</span><button onClick={() => props.scratchAdventure(props.adventure.id)}>Challenge!</button>
            </li>
        </div>
    )
}

export default Adventure;