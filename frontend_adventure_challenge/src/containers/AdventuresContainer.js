import React from 'react'
import Adventures from  '../components/Adventures'
import { connect } from 'react-redux'

class AdventuresContainer extends React.Component {
    render() {
        return (
            <div>
                <Adventures adventures={this.props.adventures} scratchAdventure={this.props.scratchAdventure} />
            </div>
        )
    }
}

const mapStateToProps = ({ adventures }) => ({ adventures })

const mapDispatchToProps = dispatch => ({
   scratchAdventure: id => dispatch({ type: 'SCRATCH_ADVENTURE', id })
})

export default connect(mapStateToProps,mapDispatchToProps)(AdventuresContainer)