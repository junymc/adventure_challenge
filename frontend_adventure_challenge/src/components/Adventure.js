import React from 'react'

const Adventure = props => {
    return (
        <div>
            <li>
                <span>{props.adventure.name}</span>
            </li>
        </div>
    )
}

export default Adventure;