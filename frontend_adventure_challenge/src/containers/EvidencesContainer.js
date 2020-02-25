import React from 'react'
import Evidences from  '../components/evidences/Evidences'
import EvidenceInput from '../components/evidences/EvidenceInput'
import { connect } from 'react-redux'
import Adventure from '../components/adventures/Adventure'

class EvidencesContainer extends React.Component {
    render() {
        // console.log(this.props)
       return this.props.adventures.adventures.map(adventure => {
            return (
                <div key={Math.random()}>
                    <Evidences 
                    evidences={this.props.evidences}
                    adventureId={adventure.id}
                    deleteEvidence={this.props.deleteEvidence} />
                    <EvidenceInput addEvidence={this.props.addEvidence} adventureId={adventure.id} />
                </div>
            )
        })
        
    }
}

const mapStateToProps = ({ evidences, adventures }) => ({ evidences, adventures })

const mapDispatchToProps = dispatch => ({
   addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence }),
   deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidencesContainer)