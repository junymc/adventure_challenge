import React from 'react'
import { Link } from 'react-router-dom'

class Logout extends React.Component {
    render() {
        return (
            <div>
                <h1>Successfully logged out!</h1>
                <h1>Come back with the evidence!!</h1>
                <Link to="/adventures">
                <button className="btn-btn">Go Challege more Adventues</button>
                </Link>
            </div>
        )
    }
}

export default Logout;