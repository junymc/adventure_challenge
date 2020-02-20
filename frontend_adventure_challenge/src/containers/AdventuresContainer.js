import React from 'react'
import Adventures from  '../components/Adventures'
import { connect } from 'react-redux'

class AdventuresContainer extends React.Component {
    render() {
        return (
            <div>
                <Adventures adventures={this.props.adventures} />
            </div>
        )
    }
}

const mapStateToProps = ({ adventures }) => ({ adventures })

// const mapDispatchToProps = dispatch => ({

// })
export default connect(mapStateToProps)(AdventuresContainer)