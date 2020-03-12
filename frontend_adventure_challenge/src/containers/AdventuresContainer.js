import React from 'react'
import Adventures from  '../components/adventures/Adventures'
import { fetchAdventures } from '../actions/fetchAdventures'
import { connect } from 'react-redux'

class AdventuresContainer extends React.Component {

    componentDidMount() {
        this.props.fetchAdventures()
    }

    render() {
        return (
            <div className="adventures">
                <h1 className="title">- Adventures List -</h1>
                <Adventures />
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        adventures: state.adventures,
        requesting: state.requesting
 }
}

const mapDispatchToProps = dispatch => ({
    fetchAdventures: () => dispatch(fetchAdventures())
})

export default connect(mapStateToProps,mapDispatchToProps)(AdventuresContainer)