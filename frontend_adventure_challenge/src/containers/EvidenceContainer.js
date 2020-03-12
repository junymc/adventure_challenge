import React from 'react'
import Evidence from  '../components/evidences/Evidence'
import Adventures from '../components/adventures/Adventures'
import { getEvidence } from '../actions/fetchEvidence'
import { connect } from 'react-redux'

class EvidenceContainer extends React.Component {

    componentDidMount() {
        this.props.getEvidence()
        console.log(this.props)
    }

    render() {
        console.log(this.props)
        // debugger
        const adventure_id = this.props.evidence.adventure_id
        const adventure = this.props.adventures.adventures.find(adventure => adventure.id === adventure_id)
        console.log(adventure, adventure_id)
            return (

                <div className="boxed">
                    <div className="parent">
                        <div className="child inline-block-child">
                            <ul id="ul">
                                <li> Name: {adventure.name} </li>
                                <li> Category: {adventure.category} </li>
                                <li> Cost:{adventure.cost} </li>
                                <li> Time: {adventure.time} </li>
                                <li> Duration: {adventure.duration} </li>
                                <li> Description: {adventure.description} </li>
                            </ul>
                        </div>
                        <div className="child inline-block-child">
                        <Evidence
                                evidence={this.props.evidence}
                                //   adventureId={adventure.id}
                                deleteEvidence={this.props.deleteEvidence} /> 
                        </div>
                    </div>
                </div>
            )
        
    }
}

const mapStateToProps = ({ evidence, adventures }) => ({ evidence, adventures })

const mapDispatchToProps = dispatch => ({
   getEvidence: () => dispatch(getEvidence()),
   deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidenceContainer)