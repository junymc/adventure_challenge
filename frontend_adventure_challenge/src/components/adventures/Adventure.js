import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { updateAdventure, createUserAdventure } from '../../actions/fetchAdventures'

function Adventure(props) {
    console.log(props)
    // console.log(props)
    const { name, category, cost, time, duration, scratch, description, id, token} = props

    const onClick = (event) => {
        props.scratchAdventure(id)
        const scratchedAdventure = props.adventures.adventures.find(adventure => adventure.id === id)
 console.log(props)
        props.updateAdventure(token, id, scratchedAdventure)
        // const user_id = props.adventures.user.id
        // createUserAdventure(token, user_id, id)
    }

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
                <>
                <p> - Sign up or Log in to see more details about this adventure and challenge! - </p>
                
                <Link to="/signup">
                    <button id="btn">Signup</button>
                </Link>
                <Link to="/login">
                    <button id="btn">Login</button>
                </Link> 
                </>
                }
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
    updateAdventure: (token, id, lastScratchedAdventure) => dispatch(updateAdventure(token, id, lastScratchedAdventure)),
    createUserAdventure: (csrf_token, user_id, id) => dispatch(createUserAdventure(csrf_token, user_id, id))
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Adventure));

