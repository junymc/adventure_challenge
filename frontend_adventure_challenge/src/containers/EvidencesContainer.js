import React from 'react'
import Evidences from  '../components/evidences/Evidences'
import EvidenceInput from '../components/evidences/EvidenceInput'
import { connect } from 'react-redux'

class EvidencesContainer extends React.Component {
    render() {
        console.log(this.props.evidences)
        return (
            <div>
                <Evidences evidences={this.props.evidences} />
                <EvidenceInput addEvidence={this.props.addEvidence} />
            </div>
        )
    }
}

const mapStateToProps = ({ evidences }) => ({ evidences })

const mapDispatchToProps = dispatch => ({
   addEvidence: description => dispatch({ type: 'ADD_EVIDENCE', description })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidencesContainer)