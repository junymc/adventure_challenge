import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEvidence, deleteEvidence } from '../../actions/fetchEvidence'

class EvidenceInput extends React.Component {

    state = {
        description: '',
        image: ''
    }

    handleOnChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        const eviDescription = this.state.description
        const eviImage = this.state.image
        const eviObjt = { eviDescription, eviImage }
        this.props.fetchEvidence(eviObjt)
        console.log(eviObjt)
        this.setState({
            description: '',
            image: ''
        })
    }

    render() {
    
        return (
            <div className="evidence-form">
                <form onSubmit={this.handleOnSubmit}>
                    <textarea
                      name="description"
                      value={this.state.description}
                      placeholder="Description"
                      onChange={(event) => this.handleOnChange(event)} />
                    <input
                      name="image"
                      type="text"
                      value={this.state.image}
                      placeholder="image"
                      onChange={(event) => this.handleOnChange(event)} />
                    <Link to={`/adventures/${this.props.adventureId}/evidence`}>
                      <button id="btn-btn" type="submit">Add Evidence</button>
                    </Link>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        evidence: state
    }
}



// const mapDispatchToProps = dispatch => ({
//     addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence }),
//     deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
// })

export default connect(mapStateToProps, {fetchEvidence, deleteEvidence})(EvidenceInput);