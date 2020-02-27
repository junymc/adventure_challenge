import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
import EvidenceInput from './EvidenceInput';
// import Adventure from '../adventures/Adventure'
import fetchAdventures from '../../actions/fetchAdventures'

function AdventureEvidence(props) {
    console.log(props)
    let { aid } = useParams();
    // debugger
    const scratchedAdventure = props.adventures.adventures.find(adventure => adventure.id === parseInt(aid))
 

    return (
        <div className="boxed">
            <ul>
                <li> Name: {scratchedAdventure.name} </li>
                <li> Category: {scratchedAdventure.category} </li>
                <li> Cost:{scratchedAdventure.cost} </li>
                <li> Time: {scratchedAdventure.time} </li>
                <li> Duration: {scratchedAdventure.duration} </li>
                <li> Description: {scratchedAdventure.description} </li>
            </ul>
            <EvidenceInput adventureId={ aid } />
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
    fetchAdventures: () => dispatch(fetchAdventures())
})

export default connect(mapStateToProps, mapDispatchToProps)(AdventureEvidence);