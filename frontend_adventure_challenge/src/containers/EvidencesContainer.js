import React from 'react'
import Evidences from  '../components/evidences/Evidences'
import EvidenceInput from '../components/evidences/EvidenceInput'
import { connect } from 'react-redux'

class EvidencesContainer extends React.Component {
    render() {
        console.log(this.props.evidences)
        return (
            <div>
                <Evidences 
                evidences={this.props.evidences}
                adventureId={this.props.adventure.id}
                deleteEvidence={this.props.deleteEvidence} />
                <EvidenceInput addEvidence={this.props.addEvidence} adventureId={this.props.adventure.id} />
            </div>
        )
    }
}

const mapStateToProps = ({ evidences }) => ({ evidences })

const mapDispatchToProps = dispatch => ({
   addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence }),
   deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidencesContainer)