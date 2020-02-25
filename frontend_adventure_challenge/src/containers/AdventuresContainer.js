import React from 'react'
import Adventures from  '../components/adventures/Adventures'
import fetchAdventures from '../actions/fetchAdventures'
import { connect } from 'react-redux'

class AdventuresContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props)
        this.props.fetchAdventures()
    }

    render() {
        console.log(this.props)
        return (
            <div className="adventures">
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
    scratchAdventure: id => dispatch({ type: 'SCRATCH_ADVENTURE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(AdventuresContainer)