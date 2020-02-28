import React, { useState } from 'react'

const LoginForm = () => {    

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

   const handleSubmit = event => {
            event.preventDefault();
                setUsername("")
                setPassword("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="inner-container">
                <div className="header">
                    <h2>Login</h2>
                    <h4>Welcome back!</h4>
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Enter Username" 
                            onChange={event => setUsername(event.target.value)}
                            value={username}/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Enter Password"
                            onChange={event => setPassword(event.target.value)}
                            value={password}/>
                    </div>
                    <button type="submit" className="btn">Login</button>

                </div>
            </div>
        </form>
    )
}

export default LoginForm;