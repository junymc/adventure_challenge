export function fetchAdventures() {
    return (dispatch) => {
        dispatch({ type: 'ADVENTURES_REQUEST' })
        fetch('http://localhost:3001/api/v1/adventures')
           .then(res => res.json())
           .then(adventures => dispatch({ type: 'ADD_ADVENTURES', adventures }))
    }
}

// write another fetch that request to update the scratch status to be true to API
export const updateAdventure = (csrf_token, id, scratchedAdventure) => {
    console.log(scratchedAdventure)
    // check if I get all the args 
    return async function (dispatch) {
        try { 
            const res = await fetch("http://localhost:3001/api/v1/adventures/" + id, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrf_token
                    },
                    body: JSON.stringify(scratchedAdventure)
            })
            dispatch({ type: 'SCRATCH_ADVENTURE', id })
            console.log('patched!')
            return await res.json()
            // figure out how to await dispatch
        }catch(error){
            console.log(error)
        }
    }
}