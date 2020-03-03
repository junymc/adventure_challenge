import React from 'react'
import SignupForm from '../components/users/SignupForm'
import { signup } from '../actions/user'
import { getToken } from '../actions/auth'
import { connect } from 'react-redux'


class SignupContainer extends React.Component {

    async componentDidMount() {
        await this.props.get_token()
    }

    submitHandler = async (username, password) => {
        await this.props.signup(this.props.csrf_token, username, password)
        console.log("Signup!")
    }

    render() {
        return (
            <div>
                <SignupForm handleSubmit={this.submitHandler} />
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