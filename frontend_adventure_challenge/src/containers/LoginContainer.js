import React from 'react'
import LoginForm from '../components/users/LoginForm'

class LoginContainer extends React.Component {

    componentDidMount() {
        // this.props.get_token()
        this.props.setCurrentUser()
    }

    submitHandler = async (username, password) => {
        
        await this.props.loginUser(this.props.token, username, password)
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