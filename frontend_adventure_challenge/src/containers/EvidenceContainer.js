import React from 'react'
import Evidence from  '../components/evidences/Evidence'
import { connect } from 'react-redux'

class EvidenceContainer extends React.Component {

    render() {
        console.log(this.props)
        const adventure_id = this.props.match.params.id
        const adventure = this.props.adventures.find(adventure => adventure.id === parseInt(adventure_id))
        console.log(adventure, adventure_id)
        
        if(!adventure){
            return (
                <div>

                </div>
            )
        }
        return (
            <div className="bigbox">
                <h2 className="text">Good job! You completed the challenge!!</h2>
                <div className="parent">
                    <div className="child1">
                        <ul id="ul">
                            <li> Name: {adventure.name} </li>
                            <li> Category: {adventure.category} </li>
                            <li> Cost:{adventure.cost} </li>
                            <li> Time: {adventure.time} </li>
                            <li> Duration: {adventure.duration} </li>
                            <li> Description: {adventure.description} </li>
                        </ul>
                    </div>
                    <div className="child2">
                        <Evidence
                            evidences={this.props.evidences}
                            adventureId={adventure.id}
                            deleteEvidence={this.props.deleteEvidence} /> 
                    </div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = state => { 
    console.log(state)
    return {
        evidences: state.evidence.evidences,
        adventures: state.adventures.adventures,
        userAdventure: state.userAdventure.userAdventures
    }
    }

const mapDispatchToProps = dispatch => ({
   deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidenceContainer);