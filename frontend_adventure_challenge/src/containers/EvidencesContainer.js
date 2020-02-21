import React from 'react'
import Evidences from  '../components/Evidences'
import EvidenceInput from '../components/EvidenceInput'
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
   addEvidence: name => dispatch({ type: 'ADD_EVIDENCE', name })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidencesContainer)