export const registerUserReducer = (state={}, action) =>{

    switch(action.type){
        case 'USER_REGISTER_REQUEST' : return{
            loading:true
        }
        case 'USER_REGISTER_SUCCESS' : return {
            loading : false,
            success :true
        }
        case 'USER_REGISTER_FAILD' : return {
            loading:false,
            err :action.payload
        }
        default : return state
    }
}

export const loginUserReducer = (state={}, action) =>{

    switch(action.type)
    {
        case 'USER_LOGIN_REQUEST' : return{
            loading: true
        }
        case 'USER_LOGIN_SUCCESS' : return{
            loading :false,
            success:true,
            currentUser: action.payload
        }
        case 'USER_LOGIN_FAILD' : return{
            loading: false,
            error: action.payload
        }
        default : return state
    }
}
