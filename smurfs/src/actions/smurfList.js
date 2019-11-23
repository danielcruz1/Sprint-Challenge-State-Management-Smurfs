import axios from 'axios';
export const SMURF_LIST = 'SMURF_LIST';

export function smurfList() {
    return dispatch => {
        axios
            .get('http://localhost:3333/smurfs')
                .then((res) => {
                    console.log(res.data)
                    dispatch({ type: SMURF_LIST, payload: res.data})
                })
                .catch((err) => {
                    console.log(err);
                })
    }
} 