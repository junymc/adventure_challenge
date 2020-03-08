export function fetchAdventures() {
    return (dispatch) => {
        dispatch({ type: 'ADVENTURES_REQUEST' })
        fetch('http://localhost:3001/api/v1/adventures')
           .then(res => res.json())
           .then(adventures => dispatch({ type: 'ADD_ADVENTURES', adventures }))
    }
}

// write another fetch that request to update the scratch status to be true to API
export const updateAdventure = (csrf_token, id, lastScratchedAdventure) => {
    console.log(csrf_token, id, lastScratchedAdventure)
    // check if I get all the args 
    return async function (dispatch) {

        try { 
            dispatch({ type: 'SCRATCH_ADVENTURE', id })
            const res = await fetch("http://localhost:3001/api/v1/adventures/" + id, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrf_token
                    },
                    body: JSON.stringify(lastScratchedAdventure)
            })
            
            console.log('patched!')
            const scratched = await res.json()
            // figure out how to await dispatch
        }catch(error){
            console.log(error)
        }
    }
}

export const createUserAdventure = (csrf_token, user_id, adventure_id) => {
    console.log(csrf_token, user_id, adventure_id)
    return async function (dispatch) {
        try{
            dispatch({
                type: 'CREATE_USER_ADVENTURE',
                payload: {
                        user_id: user_id,
                        adventure_id: adventure_id
                }
            })
            const res = await fetch("http://localhost:3001/api/v1/signup", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({user_id, adventure_id}),
                credentials: 'include'
            })
            console.log("created!")
            if(!res.ok){
                throw res
            }
        }catch(error){
            console.log(error)
        }
    }
}