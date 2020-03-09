import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchEvidence } from '../../actions/fetchEvidence'

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
        this.props.fetchEvidence(this.props.token, eviObjt, this.props.adventureId)
        console.log(eviObjt, this.props.adventureId)
        this.setState({
            description: '',
            image: ''
        })
    }

    render() {
    
        return (
            <div className="evidence-form">
                <form onSubmit={this.handleOnSubmit}>
                    <input
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
                      <button id="btn" type="submit">Add Evidence</button>
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



const mapDispatchToProps = dispatch => ({
    fetchEvidence: (token, eviObjt, adventureId) => dispatch(fetchEvidence(token, eviObjt, adventureId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EvidenceInput);