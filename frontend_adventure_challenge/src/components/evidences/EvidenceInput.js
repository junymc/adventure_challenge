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
        console.log(this.props)
        const image = this.state.image
        const description = this.state.description
        const userId = this.props.user.id
        console.log(userId)
        this.props.addEvidence(this.props.token, image, description, this.props.adventureId, userId)
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
                      type="text"
                      value={this.state.description}
                      placeholder="Description"
                      onChange={(event) => this.handleOnChange(event)} />
                    <input
                      name="image"
                      type="text"
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
        userAdventure: state.userAdventure,
        user: state.user
    }
}



const mapDispatchToProps = dispatch => ({
    addEvidence: (token, image, description, adventureId, userId) => dispatch(addEvidence(token, image, description, adventureId, userId))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EvidenceInput));