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
            const res = await fetch("http://localhost:3001/api/vi/signup", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Tyep': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({username, password}),
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
        }catch(error){
            console.log(error.message)
        }
    }
}

export const login = (csrf_token, username, password) => {
    return async function (dispatch) {
        try{
            dispatch({
                type: 'LOG_IN_USER',
                payload: {
                    username: username,
                    password: password
                }
            })

            const res = await fetch("http://localhost:3001/api/vi/login",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({username, password}),
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
        }catch(error){
            console.log(error.message)
        }
    }
}