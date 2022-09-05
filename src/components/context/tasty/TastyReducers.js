const tastyReducer = (state, action)=>{
    switch(action.type){
        case 'GET_DISHES':
            return {
                ...state,
                state: action.payload,
                loading: false,

            }
        default:
            return state
    }
}

export default tastyReducer