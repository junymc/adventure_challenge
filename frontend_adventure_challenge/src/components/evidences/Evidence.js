import React from 'react'
import { connect } from 'react-redux'
import { getEvidence, deleteEvidence } from '../../actions/fetchEvidence'

class Evidence extends React.Component {

    componentDidMount() {
        this.props.getEvidence()
    }

    handleOnClick() {
        const id = this.props.evidence.id
        this.props.deleteEvidence(id)
        console.log("deleted")
        this.props.history.push("/mypage")
    }

    render() {
        console.log(this.props)
        
        return (
            <div>
                <li>
                    {this.props.evidence.image}
                </li>
                <li>
                    {this.props.evidence.description}
                </li>
                <button id="btn" onClick={this.handleOnClick}>X</button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        evidence: state.evidence,
        adventures: state.adventures
    }
}

const mapDispatchToProps = dispatch => ({
    getEvidence: () => dispatch(getEvidence( )),
    deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Evidence);