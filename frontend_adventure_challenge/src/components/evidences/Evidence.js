import React from 'react'
import { connect } from 'react-redux'
import { fetchEvidence, deleteEvidence } from '../../actions/fetchEvidence'

class Evidence extends React.Component {

    componentDidMount() {
        this.props.fetchEvidence()
    }

    render() {
        console.log(this.props)
        // const { description, image, id, adventureId, deleteEvidence } = this.props
        // 
        const id = this.props.evidence.id
        //         key: Math.random(), 
        //         id: id,
        //         description: description,
        //         image: image,
        //         adventureId: adventureId,
        //         deleteEvidence: deleteEvidence 
        // }

        return (
            <div>
                <li>
                    {this.props.evidence.description}
                    {this.props.evidence.image}
                    <button id="btn" onClick={() => this.props.deleteEvidence(id)}>X</button>
                </li>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        evidence: state.evidence,
        adventures: state.adventures
    }
}

const mapDispatchToProps = dispatch => ({
    fetchEvidence: () => dispatch(fetchEvidence( )),
    deleteEvidence: id => dispatch({ type: 'DELETE_EVIDENCE', id })
})

export default connect(mapStateToProps, mapDispatchToProps)(Evidence);