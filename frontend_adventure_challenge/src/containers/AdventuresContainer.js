import React from 'react'
import Adventures from  '../components/adventures/Adventures'
import fetchAdventures from '../actions/fetchAdventures'
import { connect } from 'react-redux'

class AdventuresContainer extends React.Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchAdventures()
    }

    render() {
        console.log(this.props.adventures)
        return (
            <div className="adventures">
                <Adventures adventures={this.props.adventures} scratchAdventure={this.props.scratchAdventure} />
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
    scratchAdventure: id => dispatch({ type: 'SCRATCH_ADVENTURE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(AdventuresContainer)