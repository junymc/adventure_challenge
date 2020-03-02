import React from 'react'
import { signup } from '../actions/user'
import SignupForm from '../components/users/SignupForm'
import { getToken } from '../actions/auth'
import { connect } from 'react-redux'


class SignupContainer extends React.Component {

    async componentDidMount() {
        await this.props.get_token()
    }

    submitHandler = async (username, password) => {
        await this.props.signup(this.props.csrf_token, username, password)
    }

    render() {
        return (
            <div>
                <h1>Now you can challenge any adventure you chose!</h1>
                <SignupForm handlesubmit={this.submitHandler} />
            </div>
        )
    }
}

const mapStateToProps = ({ csrf_token }) => ({ csrf_token })

const mapDispatchToProps = dispatch => ({
    get_token: csrf_token => dispatch(getToken()),
    signup: (csrf_token, username, password) => dispatch(signup(csrf_token, username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupContainer)