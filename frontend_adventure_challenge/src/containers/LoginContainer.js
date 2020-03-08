import React from 'react'
import { getToken } from '../actions/auth'
import LoginForm from '../components/users/LoginForm'
import { connect } from 'react-redux'

class LoginContainer extends React.Component {

    submitHandler = (username, password) => {
        
        this.props.loginUser(this.props.token, username, password)
        console.log(this.props)
        console.log("Logged in")
    }

    render() {
        return (
            <div>
                <LoginForm handleSubmit={this.submitHandler} token={this.props.getToken}/>
            </div>
        )
    }
}


export default LoginContainer;