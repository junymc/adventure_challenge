import React from 'react'
import SignupForm from '../components/users/SignupForm'


class SignupContainer extends React.Component {

    submitHandler = async (username, password) => {
        await this.props.signupUser(this.props.token, username, password)
        console.log("Signup!")
    }

    render() {
        return (
            <div>
                <SignupForm handleSubmit={this.submitHandler} token={this.props.getToken} />
            </div>
        )
    }
}

export default SignupContainer;