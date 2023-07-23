import React, { useEffect , useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllBurgers } from "../actions/burgerActions";
import Burgers from "../BurgerList";
import Burger from "../components/Burger";
import Loading from "../components/Loading";
import Error from "../components/Error";

function Menu() {
  const dispatch = useDispatch()

  const burgersstate = useSelector(state =>state.getAllBurgersReducers)

  const {burgers, err, loading } = burgersstate
  useEffect(()=>{
   dispatch(getAllBurgers())
  }, [])
  return (
    <div>
      <div className="row justify-content-center">

        {loading ? (<Loading/>): err? (<Error error ={err} />): (
          Burgers.map(burger =>{
            return <div className="col-md-3 m-3" >
            <div >
                <Burger burger={burger}/>
            </div>
            </div>
        })
        )}
        
      </div>
    </div>
  );
}
export default Menu;
