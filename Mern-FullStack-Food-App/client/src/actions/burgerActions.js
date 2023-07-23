import axios from 'axios';
export const getAllBurgers=()=>async dispatch=>{

    dispatch({type:"GET_BURGERS_REQUEST"})
     
    try{
        const res = await axios.get("/api/burgers/getallburgers")
        console.log(res);
        dispatch({type:'GET_BURGERS_SUCCESS', payload : res.data})
    }catch(err){
        dispatch({type:'GET_BURGERS_FAILD', payload:err})
    }
}