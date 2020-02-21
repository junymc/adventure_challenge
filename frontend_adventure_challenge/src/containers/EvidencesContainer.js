import React from 'react'
import Evidence from  '../components/Evidence'
import { connect } from 'react-redux'

class EvidencesContainer extends React.Component {
    render() {
        console.log(this.props.Evidence)
        return (
            <div>
                <Evidence evidence={this.props.evidence} />
            </div>
        )
    }
}

const mapStateToProps = ({ evidence }) => ({ evidence })

const mapDispatchToProps = dispatch => ({
   addEvidence: name => dispatch({ type: 'ADD_EVIDENCE', name })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidencesContainer)