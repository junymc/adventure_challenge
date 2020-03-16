import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getEvidence, deleteEvidence } from '../../actions/fetchEvidence'

class Evidence extends React.Component {

    // componentDidMount() {
    //     this.props.getEvidence()
    // }

    handleOnClick = async () => {
        console.log(this.props)
        // const evidence = this.props.evidence.find(evidence => evidence.adventure_id === this.props.adventureId)
        const id = this.props.evidence.id
        await this.props.deleteEvidence(this.props.token, id)
        console.log("deleted")
        this.props.history.push("/userpage")
    }

    render() {
        console.log(this.props)
        
        return (
            <div className="evidence">
                <img src={this.props.evidence.image} alt="image" height="350" width="300"/>   
                <p>{this.props.evidence.description}</p>
                <button id="btn" onClick={this.handleOnClick}>Delete</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        evidence: state.evidence,
        adventures: state.adventures,
        token: state.csrf_token
    }
}

const mapDispatchToProps = dispatch => ({
    getEvidence: () => dispatch(getEvidence( )),
    deleteEvidence: (token, id) => dispatch(deleteEvidence(token, id))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Evidence));