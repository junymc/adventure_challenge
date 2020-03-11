import React from 'react'
import Evidence from  '../components/evidences/Evidence'
import AdventureEvidence from '../components/evidences/AdventureEvidence'
// import fetchEvidence from '../actions/fetchEvidence'
import { connect } from 'react-redux'

class EvidenceContainer extends React.Component {

    render() {
        console.log(this.props)
        // debugger
        // const adventure = this.props.adventures.adventures.find(adventure => adventure.id === adventureId)
       
            return (
                <div className="parent">
                    <div className="child inline-block-child">
                        <AdventureEvidence />
                    </div>
                    <div className="child inline-block-child">
                        <Evidence
                        evidence={this.props.evidence}
                        //   adventureId={adventure.id}
                        deleteEvidence={this.props.deleteEvidence} /> 
                    </div>
                </div>
            )
        
    }
}

const mapStateToProps = ({ evidence, adventures }) => ({ evidence, adventures })

const mapDispatchToProps = dispatch => ({
   addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence }),
//    fetchEvidence: () => dispatch(fetchEvidence()),
   deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidenceContainer)