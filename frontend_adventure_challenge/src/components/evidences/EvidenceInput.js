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

    // this function is not firing.. so it doesn't hit the fetch so doesn't dispatch reducer
    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.props)
        // const eviDescription = this.state.description
        // const eviImage = this.state.image
        // const eviObjt = { eviDescription, eviImage }
        const image = this.state.image
        const description = this.state.description
        this.props.fetchEvidence(this.props.token, image, description, this.props.adventureId)
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
        
        evidence: state.evidence
    }
}



const mapDispatchToProps = dispatch => ({
    fetchEvidence: (token, image, description, adventureId) => dispatch(fetchEvidence(token, image, description, adventureId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EvidenceInput);