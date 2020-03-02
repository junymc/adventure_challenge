export function fetchAdventures() {
    return (dispatch) => {
        dispatch({ type: 'ADVENTURES_REQUEST' })
        fetch('http://localhost:3001/api/v1/adventures')
           .then(res => res.json())
           .then(adventures => dispatch({ type: 'ADD_ADVENTURES', adventures }))
    }
}

// write another fetch that request to update the scratch status to be true to API
export function updateAdventure({adventure}) {
    console.log(adventure)

    return (dispatch) => {
        fetch("http://localhost:3001/api/vi/adventures/:id", {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({adventure})
        })
        .then(res => res.json())
        .then(updatedAdventure => dispatch({ type: 'SCRATCH_ADVENTURE', adventure: updatedAdventure }))
    }
}