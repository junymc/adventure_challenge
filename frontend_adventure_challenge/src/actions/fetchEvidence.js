export function fetchEvidence(eviObjt) {
console.log(eviObjt)
    const data = {
        description: eviObjt.description,
        image: eviObjt.image
    }

    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/users/user_id/adventures/adventure_id/evidences", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => dispatch({ type: 'ADD_EVIDENCE', evidence: data }))
    }
}

export function deleteEvidence(id) {
    return {type: 'DELETE_EVIDENCE', id} 
    
}

