import React from 'react'
import Adventures from  '../components/adventures/Adventures'
import { fetchAdventures, updateAdventure } from '../actions/fetchAdventures'
import { connect } from 'react-redux'

class AdventuresContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchAdventures()
    }

    render() {
        // console.log(this.props)
        return (
            <div className="adventures">
                <h1>Adventures List</h1>
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
    fetchAdventures: () => dispatch(fetchAdventures()),
    scratchAdventure: id => dispatch(updateAdventure())
})

export default connect(mapStateToProps,mapDispatchToProps)(AdventuresContainer)