import React from 'react'

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
        this.props.addEvidence(this.state.evidence)
        this.setState({
            evidence:
               {discription: '', image: ''}
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input
                      type="text"
                      value={this.state.description}
                      onChange={(event) => this.handleOnChange(event)} />
                    <input type="submit" value="Completed!"/>
                </form>
            </div>
        )
    }
}

export default EvidenceInput;