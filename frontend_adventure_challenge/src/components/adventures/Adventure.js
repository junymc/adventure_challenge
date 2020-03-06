import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { updateAdventure } from '../../actions/fetchAdventures'

function Adventure(props) {
    
    // console.log(props)
    const { name, category, cost, time, duration, scratch, description, id, token} = props

    const onClick = (event) => {
        
        props.scratchAdventure(id)
        const scratchedAdventure = props.adventures.adventures.find(adventure => adventure.scratch === true)
        const scratchedAdventuresArray = []
        const scratchedAdventures = scratchedAdventuresArray.push(scratchedAdventure)
        const lastScratchedAdventure = scratchedAdventures[scratchedAdventures.lenth - 1]
        console.log(scratchedAdventures)
        updateAdventure(token, id, lastScratchedAdventure)
    }

    // const handleLoginUser = (event) => {
        
    // }
console.log(props)
    return (
        <div className="boxed">
            <ul>
                {props.user ? <li className={scratch ? "shown" : "hidden"}> Name: {name} </li> : null}
                <li> Category: {category} </li>
                <li> Cost:{cost} </li>
                <li> Time: {time} </li>
                <li> Duration: {duration} </li>
                {props.user ? <li className={scratch ? "shown" : "hidden"}> Description: {description} </li> : null}
                {props.user ? <button id="btn" onClick={onClick}>Challenge!</button> : 
                <Link to="/login">
                <button id="btn">Login to see more details about this adventure and challenge!</button>
                </Link> }
                <Link to={`/adventures/${id}`}>
                {props.user ? <button id="btn" className={scratch ? "shown" : "hidden"}>Completed!</button> : null}
                </Link>
            </ul>
        </div>
    )
  }

const mapStateToProps = (state) => { 
    return {
        adventures: state.adventures,
        requesting: state.requesting,
        token: state.csrf_token,
        user: state.user
 }
}

const mapDispatchToProps = dispatch => ({
    scratchAdventure: id => dispatch({ type: 'SCRATCH_ADVENTURE', id }),
    updateAdventure: (token, id, lastScratchedAdventure) => dispatch(updateAdventure(token, id, lastScratchedAdventure))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Adventure));

