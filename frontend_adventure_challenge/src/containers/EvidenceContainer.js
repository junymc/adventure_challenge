import React from 'react'
import Evidence from  '../components/evidences/Evidence'
import EvidenceInput from '../components/evidences/EvidenceInput'
import { connect } from 'react-redux'
import Adventure from '../components/adventures/Adventure'

class EvidenceContainer extends React.Component {
    render() {
        console.log(this.props)
       return this.props.adventures.adventures.map(adventure => {
            return (
                <div key={Math.random()}>
                    <Evidence
                    evidence={this.props.evidence}
                    adventureId={adventure.id}
                    deleteEvidence={this.props.deleteEvidence} />
                    <EvidenceInput addEvidence={this.props.addEvidence} adventureId={adventure.id} />
                </div>
            )
        })
        
    }
}

const mapStateToProps = ({ evidence, adventures }) => ({ evidence, adventures })

const mapDispatchToProps = dispatch => ({
   addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence }),
   deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidenceContainer)