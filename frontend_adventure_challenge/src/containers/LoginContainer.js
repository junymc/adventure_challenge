import React from 'react'
import { login } from '../actions/user'
import { getToken } from '../actions/auth'
import LoginForm from '../components/users/LoginForm'
import { connect } from 'react-redux'

class LoginContainer extends React.Component {

    async componentDidMount() {
        await this.props.get_token()
    }

    submitHandler = async (username, password) => {
        await this.props.login(this.props.csrf_token, username, password)
    }

    render() {
        return (
            <div>
                <h1>Welcome Back! Let's challenge more adventure!!</h1>
                <LoginForm handlesubmit={this.submitHandler} />
            </div>
        )
    }
}

const mapStateToProps = ({ csrf_token }) => ({ csrf_token })

const mapDispatchToProps = dispatch => ({
    get_token: csrf_token => dispatch(getToken()),
    login: (csrf_token, username, password) => dispatch(login(csrf_token, username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)