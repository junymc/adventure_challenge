import React from 'react'
import Adventures from  '../components/adventures/Adventures'
import fetchAdventures from '../actions/fetchAdventures'
import { connect } from 'react-redux'

class AdventuresContainer extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Adventures adventures={this.props.adventures} scratchAdventure={this.props.scratchAdventure} />
            </div>
        )
    }
}

const mapStateToProps = ({ adventures }) => ({ adventures })

const mapDispatchToProps = dispatch => ({
    fetchAdventures: () => dispatch(fetchAdventures()),
    scratchAdventure: id => dispatch({ type: 'SCRATCH_ADVENTURE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(AdventuresContainer)