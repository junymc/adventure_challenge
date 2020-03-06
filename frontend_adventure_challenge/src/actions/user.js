export const signup = (csrf_token, username, password) => {
    
    return async function (dispatch) {
        try{
            dispatch({
                type: 'SIGNUP_USER',
                payload: {
                    user: {
                        username: username,
                        password: password
                    }
                }
            })
            const res = await fetch("http://localhost:3001/api/v1/signup", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({user: {username, password}}),
                credentials: 'include'
            })
            console.log(res)
            if(!res.ok){
                throw res
            }
        }catch(error){
            console.log(error)
        }
    }
}

export const login = (csrf_token, username, password) => {
  
    return async function (dispatch) {
        try{
            dispatch({
                type: 'LOGIN_USER',
                payload: {
                    user: {
                        username: username,
                        password: password
                    }
                }
            })

            const res = await fetch("http://localhost:3001/api/v1/login",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({user: {username, password}}),
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
        }catch(error){
            console.log(error)
        }
    }
}

export const logout = (csrf_token) => {
  
    return async function (dispatch) {
        try{
    
            const res = await fetch("http://localhost:3001/api/v1/logout",{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                credentials: 'include'
            })
            dispatch({ type: 'LOGOUT_USER'})
            dispatch({ type: 'CLEAR_TOKEN'})
            return await res.json()
        }catch(error){
            console.log(error)
        }
    }
}