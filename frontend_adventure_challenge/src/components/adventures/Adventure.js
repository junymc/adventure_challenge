import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { updateAdventure } from '../../actions/fetchAdventures'

function Adventure(props) {
    
    // console.log(props)
    const { name, category, cost, time, duration, scratch, description, id } = props

    const onClick = (event) => {
        props.scratchAdventure(id)
        const scratchedAdventure = props.adventures.adventures.find(adventure => adventure.scratch === true)
        updateAdventure(id, scratchedAdventure)
    }

    return (
        <div className="boxed">
            <ul>
                <li className={scratch ? "shown" : "hidden"}> Name: {name} </li>
                <li> Category: {category} </li>
                <li> Cost:{cost} </li>
                <li> Time: {time} </li>
                <li> Duration: {duration} </li>
                <li className={scratch ? "shown" : "hidden"}> Description: {description} </li>
                <button id="btn" onClick={onClick}>Challenge!</button>
                <Link to={`/adventures/${id}`}>
                <button id="btn" className={scratch ? "shown" : "hidden"}>Completed!</button>
                </Link>
            </ul>
        </div>
    )
  }

const mapStateToProps = (state) => { 
    return {
        adventures: state.adventures,
        requesting: state.requesting
 }
}

const mapDispatchToProps = dispatch => ({
    scratchAdventure: id => dispatch({ type: 'SCRATCH_ADVENTURE', id }),
    updateAdventure: (id, scratchedAdventure) => dispatch(updateAdventure(id, scratchedAdventure))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Adventure));

