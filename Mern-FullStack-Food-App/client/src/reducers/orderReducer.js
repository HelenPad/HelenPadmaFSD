export const placeOrderReducer = (state={}, action) =>{

    switch(action.type){
        case 'PLACE_ORDER_REQUEST' : return{
            loading:true
        }
        case 'PLACE_ORDER_SUCCESS' : return {
            loading : false,
            success :true
        }
        case 'PLACE_ORDER_FAILD' : return {
            loading:false,
            err :action.payload
        }
        default : return state
    }
}

export const getUserOrdersReducers = (state ={orders:[]}, action)=>{
    switch(action.type){
        case 'GET_USERORDERS_REQUEST': return{
            loading : true,
            ...state
        }
        case 'GET_USERORDERS_SUCCESS':return{
            orders: [...action.payload],
            loading: false
        }
        case 'GET_USERORDERS_SUCCESS': return{
            error: action.payload
        }
        default : return state;
    }

}