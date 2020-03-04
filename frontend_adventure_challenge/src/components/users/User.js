import React from 'react'
import { Link } from 'react-router-dom'

class User extends React.Component {
    render() {
        return (
            <div>
                <h1>Welcome Back!</h1>
                <h2>Ready to Challenge more adventures?</h2>
                <Link to="/adventures">
                    <button className="btn-btn">Go to Adventure List</button>
                </Link>
                <button className="btn-btn">Logout</button>
            </div>
        )
    }
}

export default User;