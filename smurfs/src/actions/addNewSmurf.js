import axios from 'axios';
export const ADD_NEW_SMURF = 'ADD_NEW_SMURF';

export function addNewSmurf(fromData) {
    return dispatch => {
        dispatch({type: ADD_NEW_SMURF, payload: formData})
        axios.post('http://localhost:3333/smurfs', formData)
            .then((res) => {console.log(res)})
    }
}