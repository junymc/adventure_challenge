import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'
// import { getEvidence } from '../../actions/fetchEvidence'
import EvidenceInput from './EvidenceInput'
import Evidence from './Evidence'

function AdventureEvidence(props) {
    console.log(props)
    console.log(props.evidence.adventure_id)

    let { aid } = useParams();
    // debugger
    const scratchedAdventure = props.adventures.adventures.find(adventure => adventure.id === parseInt(aid))

    if(Object.keys(props.evidence).length > 0 && props.evidence.adventure_id === scratchedAdventure.id) {
        return (
            <div className="bigbox">
                <h2>You already posted your evidence!</h2>
                <div className="parent">
                    <div className="child1">
                        <ul id="ul">
                            <li> Name: {scratchedAdventure.name} </li>
                            <li> Category: {scratchedAdventure.category} </li>
                            <li> Cost:{scratchedAdventure.cost} </li>
                            <li> Time: {scratchedAdventure.time} </li>
                            <li> Duration: {scratchedAdventure.duration} </li>
                            <li> Description: {scratchedAdventure.description} </li>
                        </ul>
                    </div>
                    <div className="child2">
                        <Evidence
                            evidence={props.evidence}
                            adventureId={scratchedAdventure.id}
                            deleteEvidence={props.deleteEvidence} /> 
                    </div>
                </div>
            </div>
        )

    }
    return (
        <div className="boxed">
            <div className="parent1">
                <div className="child inline-block-child">
                    <ul id="ul">
                        <li> Name: {scratchedAdventure.name} </li>
                        <li> Category: {scratchedAdventure.category} </li>
                        <li> Cost:{scratchedAdventure.cost} </li>
                        <li> Time: {scratchedAdventure.time} </li>
                        <li> Duration: {scratchedAdventure.duration} </li>
                        <li> Description: {scratchedAdventure.description} </li>
                    </ul>
                </div>    
                <div className="child inline-block-child">
                    <EvidenceInput adventureId={ aid } />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => { 
    return {
        adventures: state.adventures,
        requesting: state.requesting,
        evidence: state.evidence
 }
}

export default connect(mapStateToProps)(AdventureEvidence);