import React from 'react'

const Evidence = props => {
console.log(props)
    const { evidence, description, image, id} = props
    return (
        <div>
            <li>
                {description}
                {image}
                <button onClick={() => props.deleteEvidence(id)}>X</button>
            </li>
        </div>
    )
}

export default Evidence;