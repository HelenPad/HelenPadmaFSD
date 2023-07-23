export const getAllBurgersReducers = (state ={burgers:[]}, action)=>{
    switch(action.type){
        case 'GET_ALLBURGERS_REQUEST': return{
            loading : true,
            ...state
        }
        case 'GET_ALLBURGERS_SUCCESS':return{
            burger: [...action.payload],
            loading: false
        }
        case 'GET_ALLBURGERS_SUCCESS': return{
            error: action.payload
        }
        default : return state;
    }

}