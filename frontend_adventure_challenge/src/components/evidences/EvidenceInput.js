import React from 'react'
import { connect } from 'react-redux'

class EvidenceInput extends React.Component {

    state = {
        description: '',
        image: ''
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.props)
        this.props.addEvidence({evidence: this.state, adventureId: this.props.adventureId})
        this.setState({
            discription: '',
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
                    <button id="btn-btn" type="submit">Add Evidence</button>
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

const mapDispatchToProps = dispatch => ({
    addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence }),
    deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(EvidenceInput);