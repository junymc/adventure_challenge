import React from 'react'
import { getToken } from '../actions/auth'
import LoginForm from '../components/users/LoginForm'

class LoginContainer extends React.Component {

    // async componentDidMount() {
    //     await this.props.get_token()
    // }

    submitHandler = (username, password) => {
        this.props.loginUser(this.props.token, username, password)
        console.log("Logged in")
    }

    render() {
        return (
            <div>
                <LoginForm handleSubmit={this.submitHandler} token={getToken} />
            </div>
        )
    }
}

export default LoginContainer;