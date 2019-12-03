const initialState = {
   smurfs: []
}

export function smurfReducer(state = initialState, action) {
    switch(action.type) {
        case 'SMURF_LIST':
            return {
                smurfs: action.payload
            }

        case 'ADD_NEW_SMURF':
            console.log(state)
            return {
                smurfs: [
                    ...state.smurfs,
                    action.payload
                ]
            }

        default:
            return state;
    }
} 