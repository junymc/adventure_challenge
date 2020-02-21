import React from 'react'

const Evidence = props => {
    console.log(props)
    return (
        <div>
            <li>
                <span>{props.evidence.description}</span>
            </li>
        </div>
    )
}

export default Evidence;