import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getEvidences, deleteEvidence } from '../../actions/fetchEvidence'

class Evidence extends React.Component {

    // componentDidMount() {
    //     const adventureId = this.props.match.params.id
    //     this.props.getEvidences(parseInt(adventureId))
    // }

    handleOnClick = () => {
        console.log(this.props)
        const adventureId = this.props.match.params.id
        const evidence = this.props.evidences.find(evidence => evidence.adventure_id === parseInt(adventureId))
        const id = evidence.id
        this.props.deleteEvidence(this.props.token, id)
        console.log("deleted")
        this.props.history.push("/userpage")
    }

    render() {
        console.log(this.props)
        const adventureId = this.props.match.params.id
        const evidence = this.props.evidences.find(evidence => evidence.adventure_id === parseInt(adventureId))

        if(!evidence){
            return (
                <div>

                </div>
            )
        }
        return (
            <div className="evidence">
                <img src={evidence.image} alt="image" height="350" width="300"/>   
                <p>{evidence.description}</p>
                <button id="btn" onClick={this.handleOnClick}>Delete</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        evidences: state.evidence.evidences,
        adventures: state.adventures,
        token: state.csrf_token
    }
}

const mapDispatchToProps = dispatch => ({
    getEvidences: id => dispatch(getEvidences(id)),
    deleteEvidence: (token, id) => dispatch(deleteEvidence(token, id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Evidence));