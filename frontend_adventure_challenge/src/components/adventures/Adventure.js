import React from 'react'
import EvidencesContainer from '../../containers/EvidencesContainer'

const Adventure = props => {
    // console.log(props)
    const  { adventure, name, category, cost, time, duration, scratch, description, id } = props

    return (
        <div>
            <ul className="boxed">
                <li className={scratch ? "shown" : "hidden"}> Name: {name} </li>
                <li> Category: {category} </li>
                <li> Cost:{cost} </li>
                <li> Time: {time} </li>
                <li> Duration: {duration} </li>
                <li className={scratch ? "shown" : "hidden"}> Description: {description} </li>
                <button onClick={() => props.scratchAdventure(id)}>Challenge!</button>
                <EvidencesContainer adventure={adventure} />
            </ul>
        </div>
    )
}

export default Adventure;