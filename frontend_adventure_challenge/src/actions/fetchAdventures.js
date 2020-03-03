export function fetchAdventures() {
    return (dispatch) => {
        dispatch({ type: 'ADVENTURES_REQUEST' })
        fetch('http://localhost:3001/api/v1/adventures')
           .then(res => res.json())
           .then(adventures => dispatch({ type: 'ADD_ADVENTURES', adventures }))
    }
}

// write another fetch that request to update the scratch status to be true to API
export const updateAdventure = (id, data) => {
    console.log(data)
    return async function () {
        try { 
            const res = await fetch("http://localhost:3001/api/v1/adventures/" + id, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
            })
            if(!res.ok){
                throw res
            }
        }catch(error){
            console.log(error)
        }
    }
}