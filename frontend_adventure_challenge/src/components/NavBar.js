import React from 'react'
import { Link } from 'react-router-dom'
import AdventuresContainer from '../containers/AdventuresContainer'

class NavBar extends React.Component {

    render() {
        const navStyle = {
            color: 'white'
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

export default NavBar;