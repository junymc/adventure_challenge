import React from 'react'
import { connect } from 'react-redux'
import { getEvidences } from '../../actions/fetchEvidence'
import EvidenceInput from './EvidenceInput'
import Evidence from './Evidence'

class AdventureEvidence extends React.Component {

    componentDidMount() {
        const adventureId = this.props.match.params.id
        this.props.getEvidences(parseInt(adventureId))
    }

    render() {
    console.log(this.props)
    const adventureId = this.props.match.params.id
    const scratchedAdventure = this.props.adventures.adventures.find(adventure => adventure.id === parseInt(adventureId))

    if(Object.keys(this.props.evidences).length > 0 
        && this.props.evidences.find(evidence => evidence.adventure_id === scratchedAdventure.id) 
        && this.props.evidences.find(evidence => evidence.user_id === this.props.user.id)) {
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
                            evidence={this.props.evidences}
                            evidenceUser={this.props.user}
                            adventureId={scratchedAdventure.id}
                            deleteEvidence={this.props.deleteEvidence} /> 
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
                    <EvidenceInput adventureId={ scratchedAdventure.id } />
                </div>
            </div>
        </div>
    )
}
}

const mapStateToProps = (state) => { 
    return {
        adventures: state.adventures,
        requesting: state.requesting,
        evidences: state.evidence.evidences,
        userAdventures: state.userAdventure.userAdventures
 }
}

const mapDispatchToProps = dispatch => ({
    getEvidences: id => dispatch(getEvidences(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdventureEvidence);