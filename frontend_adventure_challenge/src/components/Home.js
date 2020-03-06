import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {

    deleteHandler = async () => {
        await this.props.logout(this.props.csrf_token)
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

export default Home;