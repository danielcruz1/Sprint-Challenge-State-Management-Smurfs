const initialState = {
   
}

export function smurfReducer(state = initialState, action) {
    switch(action.type) {
        case 'SMURF_LIST':
            return {
                smurfs: action.payload
            }

        default:
            return state;
    }
} 