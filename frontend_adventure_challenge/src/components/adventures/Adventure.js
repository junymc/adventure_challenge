import React from 'react'
import EvidencesContainer from '../../containers/EvidencesContainer'

const Adventure = props => {
    console.log(props)
    const  { adventure } = props

    return (
        <div>
            <ul className="boxed">
                <li className={props.scratch ? "shown" : "hidden"}> Name: {props.name} </li>
                <li> Category: {props.category} </li>
                <li> Cost:{props.cost} </li>
                <li> Time: {props.time} </li>
                <li> Duration: {props.duration} </li>
                <li className={props.scratch ? "shown" : "hidden"}> Description: {props.description} </li>
                <button onClick={() => props.scratchAdventure(adventure.id)}>Challenge!</button>
                <EvidencesContainer adventure={adventure} />
            </ul>
        </div>
    )
}

export default Adventure;