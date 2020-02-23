import React from 'react'
import Adventure from './Adventure'

const Adventures = props => {
console.log(props)
// props is {adventures: Array(0), scratchAdventure: ƒ}
// adventures is array of hash
    const adventures = props.adventures.map(adventure => (
        <Adventure key={adventure.id} 
                   name={adventure.name}
                   category={adventure.category}
                   cost={adventure.cost}
                   time={adventure.time}
                   duration={adventure.duration}
                   hints={adventure.hints}/>
    ))

    return (
        <div>
            { adventures }
        </div>
    )
}

export default Adventures;