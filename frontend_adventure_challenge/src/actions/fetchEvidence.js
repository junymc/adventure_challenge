export const fetchEvidence = (csrf_token, eviObjt, adventureId) => {
    console.log(csrf_token, eviObjt, adventureId)
    return async function (dispatch) {
        try{
            const res = await fetch("http://localhost:3001/api/v1/adventures/adventure_id/evidences", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf_token
                },
                body: JSON.stringify({eviObjt, adventureId}),
                credentials: 'include'
            })
            console.log("created!")
            if(!res.ok){
                throw res
            }
            const evidence = await res.json()
            dispatch({
                type: 'ADD_EVIDENCE',
                payload: evidence
            })
        }catch(error){
            console.log(error)
        }
    }
}

// export function fetchEvidence(eviObjt) {
// console.log(eviObjt)
//     const data = {
//         description: eviObjt.description,
//         image: eviObjt.image
//     }

//     return (dispatch) => {
//         fetch("http://localhost:3001/api/v1/users/user_id/adventures/adventure_id/evidences", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify(data)
//         })
//             .then(res => res.json())
//             .then(data => dispatch({ type: 'ADD_EVIDENCE', evidence: data }))
//     }
// }

// export function deleteEvidence(id) {
//     return {type: 'DELETE_EVIDENCE', id} 
    
// }

// export const fetchEvidence = (description, image) => {
//     return async function (dispatch) {
//         try{
//             dispatch({
//                 type: 'ADD_EVIDENCE',
//                 payload: {
//                     description: description,
//                     image: image
//                     }
//                 }
//             })

//             const res = await fetch("http://localhost:3001/api/v1/users/")
//         }
//     }
// }

