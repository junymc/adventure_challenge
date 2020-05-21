import React from 'react'
import { connect } from 'react-redux'
import { getEvidences } from '../actions/fetchEvidence'

class UserContainer extends React.Component {

    componentDidMount() {
        this.props.getEvidences()
        this.props.setCurrentUser()
        
    }

    render() {

        if(!this.props.evidences){
            return (
                <div>
                    <h1>User Page</h1>
                </div>
            )
        }

        return (
        
            <div>
                <div>
                    <h1>User Page</h1>
                </div>
                <div>
                    {this.props.evidences.map(evidence => {
                        return (
                            <div class="evidences">
                                <img src={evidence.image} alt="evidence" height="350" width="300"/>   
                                <p>{evidence.description}</p>
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => { 
    return {
        evidences: state.evidence.evidences,
        adventures: state.adventures.adventures,
        userAdventure: state.userAdventure.userAdventures
    }
    }
const mapDispatchToProps = dispatch => ({
    getEvidences: () => dispatch(getEvidences())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);