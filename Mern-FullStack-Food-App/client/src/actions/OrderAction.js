import axios from 'axios'

export const placeOrder =(token, subTotal)=>async (dispatch, getState)=>{
  
    dispatch({type: 'PLACE_ORDER_REQUEST'})
    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems

    try{

        const res = await axios.post('/api/orders/placeOrder', {token, subTotal, currentUser, cartItems})
        dispatch({type: 'PLACE_ORDER_SUCCESS'})
        console.log(res)
    } catch (err){
        dispatch({type: 'PLACE_ORDER_FAILD'})
       console.log(err) 
    }
}


export const getUserOrders=()=>async (dispatch, getState)=>{

    const currentUser = getState().loginUserReducer.currentUser
    dispatch({type:"GET_USERORDERS_REQUEST"})
     
    try{
        const res = await axios.post("/api/orders/getuserorders", {userid: currentUser._id})

        
        console.log(res);
        dispatch({type:'GET_USERORDERS_SUCCESS', payload : res.data})
    }catch(err){
        dispatch({type:'GET_USERORDERS_FAILD', payload:err})
    }
}