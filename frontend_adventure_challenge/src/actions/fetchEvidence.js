export const addEvidence = (csrf_token, image, description, adventureId, userId) => {
    console.log(csrf_token, image, description, adventureId, userId)
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/api/v1/adventures/adventure_id/evidences", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({csrf_token, image, description, adventureId, userId}),
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const evidence = await res.json()
            dispatch({
                type: 'ADD_EVIDENCE',
                payload: evidence
            })
            console.log("created!")
            console.log(evidence)
        }catch(error){
            console.log(error)
        }
    }
}

export const getEvidences = () => {
    return async function (dispatch) {
        try{
            const res = await fetch(`http://localhost:3001/api/v1/userEvidences`, {
                credentials: 'include'
            })
            if(!res.ok){
                throw res
            }
            const evidences = await res.json()
            dispatch({
                type: 'SET_EVIDENCE',
                payload: evidences
            })
            console.log(evidences)
        }catch(error){
            console.log(error)
        }
    }
}

export const deleteEvidence = (csrf_token, id) => {
  console.log(csrf_token, id)
    return async function (dispatch) {
        try{
    
            const res = await fetch("http://localhost:3001/api/v1/adventures/adventure_id/evidences/" + id,{
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                credentials: 'include'
            })
            dispatch({ type: 'DELETE_EVIDENCE', id })
            return await res.json()
        }catch(error){
            console.log(error)
        }
    }
}

