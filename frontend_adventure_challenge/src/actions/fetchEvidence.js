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

