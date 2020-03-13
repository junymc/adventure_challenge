import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { createUserAdventure } from '../../actions/fetchAdventures'

function Adventure(props) {
    
    const { name, category, cost, time, duration, scratch, description, id, token} = props

    const onClick = (event) => {
        props.scratchAdventure(id)
        const scratchedAdventure = props.adventures.adventures.find(adventure => adventure.id === id)
        console.log(scratchedAdventure)
        props.createUserAdventure(token, props.user, scratchedAdventure)
 
    }

    return (
        <div className="boxed">
            <ul>
                {props.user ? <li className={scratch === true ? "shown" : "hidden"}> Name: {name} </li> : null}
                <li> Category: {category} </li>
                <li> Cost:{cost} </li>
                <li> Time: {time} </li>
                <li> Duration: {duration} </li>
                {props.user ? <li className={scratch === true ? "shown" : "hidden"}> Description: {description} </li> : null}
                {props.user !== null && Object.keys(props.user).length > 0 ? 
                    <button id="btn" onClick={onClick}>Challenge!</button> : 
                    <div>
                    - <a href="/signup" className="linkw" >Sign up</a> or <a href="/login" className="linkw" >Log in</a> to see more details about this adventure and challenge! -
                    </div>
                }
                <Link to={`/adventures/${id}`}>
                {props.user ? <button id="btn" className={scratch ? "shown" : "hidden"} >Completed!</button> : null}
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
    // updateAdventure: (token, id, lastScratchedAdventure) => dispatch(updateAdventure(token, id, lastScratchedAdventure)),
    createUserAdventure: (csrf_token, user, scratchedAdventure) => dispatch(createUserAdventure(csrf_token, user, scratchedAdventure))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Adventure));

