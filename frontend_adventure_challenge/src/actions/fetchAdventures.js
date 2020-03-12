export function fetchAdventures() {
    return (dispatch) => {
        dispatch({ type: 'ADVENTURES_REQUEST' })
        fetch('http://localhost:3001/api/v1/adventures')
           .then(res => res.json())
           .then(adventures => dispatch({ type: 'ADD_ADVENTURES', adventures }))
    }
}

export const createUserAdventure = (csrf_token, user, adventure) => {

    return async function (dispatch) {
        try{
            
            const res = await fetch("http://localhost:3001/api/v1/user_adventures", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({user, adventure}),
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const user_adventure = await res.json()
            dispatch({
                type: 'CREATE_USER_ADVENTURE',
                payload: user_adventure
            })
            console.log("created!")
        }catch(error){
            console.log(error)
        }
    }
}