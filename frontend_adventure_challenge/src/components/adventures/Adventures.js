import React from 'react'
import Adventure from './Adventure'

const Adventures = props => {

    const adventures = props.adventures.map(adventure => <Adventure key={adventure.id} adventure={adventure} />)

    return (
        <div>
            { adventures }
        </div>
    )
}

export default Adventures;