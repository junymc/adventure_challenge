import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Home extends React.Component {

    componentDidMount() {
        this.props.get_token()
        this.props.setCurrentUser()
        console.log(this.props)
    }

    deleteHandler = () => {
        this.props.logoutUser(this.props.token)
        console.log("Logged out")
        this.props.history.push("/logout")
    }

    render() {
        return (
            <div>
                <h1 id="home-top">Welcome to </h1>
                <h3 id="home-middle">the</h3>
                <h1 id="home-bottom">Adventure Challenge</h1>
                <Link to="">
                {this.props.user ? <button id="btn" onClick={this.deleteHandler}>Logout</button> : null}
                </Link>
            </div>
        )
    }
}

export default withRouter(Home);