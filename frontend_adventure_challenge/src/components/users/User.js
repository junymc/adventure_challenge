import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../actions/user'
import { getToken } from '../../actions/auth'

class User extends React.Component {

    deleteHandler = async () => {
        await this.props.logout(this.props.csrf_token)
        console.log("Logged out")
        this.props.get_token()
        this.props.history.push("/logout")
    }

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <h2>Ready to Challenge adventures?</h2>
                <Link to="/adventures">
                    <button id="btn">Adventure List</button>
                </Link>
                <Link to="/userpage">
                    <button id="btn">My page</button>
                </Link>
                <button id="btn" onClick={this.deleteHandler}>Logout</button>
            </div>
        )
    }
}

const mapStateToProps = ({ csrf_token }) => ({ csrf_token })

const mapDispatchToProps = dispatch => ({
    logout: (csrf_token) => dispatch(logout(csrf_token)),
    get_token: () => dispatch(getToken())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(User));