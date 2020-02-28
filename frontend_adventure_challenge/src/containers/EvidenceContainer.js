import React from 'react'
import Evidence from  '../components/evidences/Evidence'
// import fetchEvidence from '../actions/fetchEvidence'
import { connect } from 'react-redux'

class EvidenceContainer extends React.Component {

    // componentDidMount() {
    //     console.log(this.props)
    //     this.props.fetchEvidence()
    // }

    render() {
        // console.log(this.props)
        // debugger
       return this.props.adventures.adventures.map(adventure => {
            return (
                <div key={Math.random()}>
                    <Evidence
                    evidence={this.props.evidence}
                    adventureId={adventure.id}
                    deleteEvidence={this.props.deleteEvidence} />
                </div>
            )
        })
        
    }
}

const mapStateToProps = ({ evidence, adventures }) => ({ evidence, adventures })

const mapDispatchToProps = dispatch => ({
   addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence }),
//    fetchEvidence: () => dispatch(fetchEvidence()),
   deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(EvidenceContainer)