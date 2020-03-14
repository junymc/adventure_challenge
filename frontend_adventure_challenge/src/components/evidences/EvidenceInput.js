import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addEvidence } from '../../actions/fetchEvidence'

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

    // this function is not firing.. so it doesn't hit the fetch so doesn't dispatch reducer
    handleOnSubmit = (event) => {
        event.preventDefault();
        const image = this.state.image
        const description = this.state.description
        this.props.addEvidence(this.props.token, image, description, this.props.adventureId)
        this.setState({
            description: '',
            image: ''
        })
        this.props.history.push(`/adventures/${this.props.adventureId}/evidence`)
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
                      type="file"
                      value={this.state.image}
                      placeholder="image"
                      onChange={(event) => this.handleOnChange(event)} />
                    {/* <Link to={`/adventures/${this.props.adventureId}/evidence`}> */}
                      <button id="btn" type="submit" >Add Evidence</button>
                    {/* </Link> */}
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        token: state.csrf_token,
        evidence: state.evidence,
        userAdventure: state.userAdventure
    }
}



const mapDispatchToProps = dispatch => ({
    addEvidence: (token, image, description, adventureId) => dispatch(addEvidence(token, image, description, adventureId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EvidenceInput));