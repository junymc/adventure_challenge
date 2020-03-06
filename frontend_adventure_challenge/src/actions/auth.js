export const getToken = () => {
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/api/v1/auth", {
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const tkJson = await res.json()
            const csrf_token = tkJson.csrf_auth_token
        
            console.log(csrf_token)
            dispatch({
                type: 'GET_CSRF_TOKEN',
                payload: csrf_token
            })
        }catch(error){
            console.log(error)
        }
    }
}