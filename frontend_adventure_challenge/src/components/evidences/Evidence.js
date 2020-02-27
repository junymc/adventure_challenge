import React from 'react'
import { connect } from 'react-redux'

class Evidence extends React.Component {
    render() {
       console.log(this.props)
        const { description, image, id, adventureId, deleteEvidence } = this.props
        const evidence = {
                key: Math.random(), 
                id: id,
                description: description,
                image: image,
                adventureId: adventureId,
                deleteEvidence: deleteEvidence 
        }

        return (
            <div>
                <li>
                    {evidence.description}
                    {evidence.image}
                    <button onClick={() => this.props.deleteEvidence(id)}>X</button>
                </li>
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
    deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Evidence);