import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from "../actions/userActions";
import Error from "../components/Error";
import Loading from "../components/Loading";



export default function Login(){


  const [email, setEmail] = useState('')
  const[password, setPassword] = useState('')
  const loginstate = useSelector(state=> state.loginUserReducer)
  const {loading, error} = loginstate
  const dispatch = useDispatch()

  useEffect(()=>{      
    if(localStorage.getItem('currentUser'))
  {
    window.location.href ='/'
  }
  })

  function login(){
    const user = {email, password}
    dispatch(loginUser(user))
  }
    return(
        <div>
             <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className="text-center mt-2" style={{fontSize: '35px'}}>Login</h2>
                   
                   { loading &&  (<Loading/>)}
                    {error && (<Error error='invalid credentials'/>)}
                  
                    
                  <div>
                    <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                    <input required type="text" placeholder="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    <button onClick={login} className="btn mt-2 mb-3">Login</button>
                    <br/>
                    <a style={{color:"black"}} href="/" >Click here to Register</a>
                  </div>
                </div>
            </div>
        </div>
    )
}