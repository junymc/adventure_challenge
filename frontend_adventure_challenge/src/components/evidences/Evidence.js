import React from 'react'
import { connect } from 'react-redux'

function Evidence(props) {
    console.log(props)
    const { description, image, id, adventureId, deleteEvidence } = props
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
                <button id="btn" onClick={() => props.deleteEvidence(id)}>X</button>
            </li>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        evidence: state.evidence,
        adventures: state.adventures
    }
}

const mapDispatchToProps = dispatch => ({
    deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Evidence);