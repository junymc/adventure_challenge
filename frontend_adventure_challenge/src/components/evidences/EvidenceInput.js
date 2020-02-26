import React from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router-dom'

class EvidenceInput extends React.Component {

    state = {
        evidence:
           {discription: '', image: ''}
    }

    handleOnChange(event) {
        this.setState({
            evidence: event.target.value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();
        this.props.addEvidence({evidence: this.state.evidence, adventureId: this.props.adventureId})
        this.setState({
            evidence:
               {discription: '', image: ''}
        })
    }

    render() {
    
        return (
            <div className="evidence-form">
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                      type="text"
                      value={this.state.evidence.description}
                      placeholder="Description"
                      onChange={(event) => this.handleOnChange(event)} />
                    <input
                      type="text"
                      value={this.state.evidence.image}
                      placeholder="image"
                      onChange={(event) => this.handleOnChange(event)} />
                    <input type="submit" value="Completed!"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        evidence: state.evidence
    }
}

const mapDispatchToProps = dispatch => ({
    addEvidence: evidence => dispatch({ type: 'ADD_EVIDENCE', evidence })
})

export default connect(mapStateToProps, mapDispatchToProps)(EvidenceInput);