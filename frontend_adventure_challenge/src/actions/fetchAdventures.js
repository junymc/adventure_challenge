function fetchAdventures() {
    return (dispatch) => {
        dispatch({ type: 'ADVENTURES_REQUEST' })
        fetch('http://localhost:3000/api/v1/adventures')
           .then(res => res.json())
           .then(adventures => dispatch({ type: 'ADD_ADVENTURES', adventures }))
    }
}
export default fetchAdventures;

// write another fetch that request to update the scratch status to be true to API