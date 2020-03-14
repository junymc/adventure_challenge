import React from 'react'
import { logout } from '../actions/user'
import { getToken } from '../actions/auth'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class NavBar extends React.Component {

    deleteHandler = async () => {
        await this.props.logout(this.props.csrf_token)
        console.log("Logged out")
        this.props.get_token()
        this.props.history.push("/logout")
    }

    render() {
        const navStyle = {
            color: 'white'
          }

        if(this.props.user !== null && Object.keys(this.props.user).length > 0) {
            return (
                <div id="nav">
                    <nav>
                    <ul className="nav-links">
                        <Link to="/" style={navStyle}> Home </Link>
                        <Link to="/adventures" style={navStyle}> Adventures </Link>
                        <Link to="/logout" style={navStyle} onClick={this.deleteHandler}> Logout </Link>
                        <Link to="userpage" style={navStyle}> My Page</Link>
                    </ul>
                    </nav>
                </div>
            )
        }
        return (
            <div id="nav">
                <nav>
                <ul className="nav-links">
                    <Link to="/" style={navStyle}> Home </Link>
                    <Link to="/adventures" style={navStyle}> Adventures </Link>
                    <Link to="/signup" style={navStyle}> Sign Up </Link>
                    <Link to="/login" style={navStyle}> Login </Link>
                </ul>             
                </nav>
            </div>
        )
    }
}

const mapStateToProps = ({ csrf_token }) => ({ csrf_token })

const mapDispatchToProps = dispatch => ({
    logout: (csrf_token) => dispatch(logout(csrf_token)),
    get_token: () => dispatch(getToken())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar));