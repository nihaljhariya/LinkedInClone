import { useState } from 'react'
import React , { useEffect } from 'react'
import UserLayout from '@/layout/UserLayout'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./style.module.css";
import { registerUser } from '@/config/redux/action/authAction'
import { loginUser } from '@/config/redux/action/authAction'
import { emptyMessage } from '@/config/redux/reducer/authReducer'
function loginComponent () {

  const authState = useSelector ((state) => state.auth)

  const router = useRouter();
  const dispatch = useDispatch();

  const [userLoginMethod , setUserLogingMethod]  = useState(false);
  const [email , setEmail] = useState("");
  const [username , setUsername] = useState("");
  const [password , setPassword] = useState("");
  const [name , setName] = useState("");


  // useEffect(()=>{
  //   if(authState.loggedIn){
  //     router.replace("/dashboard")
  //   }
  // } , [authState.loggedIn]);


  useEffect(()=>{
    if(localStorage.getItem('token')){
      router.push("/dashboard")
    }
  } , [])




useEffect (()=>{
  dispatch(emptyMessage())
} , [userLoginMethod]);


  const handleRegister = () =>{
    console.log("registering");
    dispatch(registerUser({username , password , email , name }))
  }

  const handleLogin = () =>{
    console.log("Login.")
    dispatch(loginUser({email , password}))
  }


  return (
    <UserLayout>
    <div className={styles.container}>

    

      <div className={styles.cardContainer}>
        <div className={styles.cardContainer_left}>
        <p className={styles.card_leftheading}> {userLoginMethod ? "Sign In" : "Sign Up"}</p>
            <p style = {{color: authState.isError ? "red" : "Green"}}>{authState.message.message}</p> 
       
       
       <div className={styles.inputContainers}>
        
        {!userLoginMethod && <div className={styles.inputRow}>
        <input onChange={(e) =>setUsername(e.target.value)} className={styles.inputField} type='text' placeholder='Username'></input>
        <input onChange={(e) =>setName(e.target.value)} className={styles.inputField} type='text' placeholder='Name'></input>
        </div> }
       
        <input onChange={(e) =>setEmail(e.target.value)} className={styles.inputField} type='text' placeholder='Email'></input>
        <input onChange={(e) =>setPassword(e.target.value)} className={styles.inputField} type='text' placeholder='Password'></input>
        
         <div onClick={()=>{
          if(userLoginMethod){
           handleLogin();
          }else{
            handleRegister();
          }
         }} className={styles.buttonWithOutline}>
          <p>{userLoginMethod ? "Sign In " : "Sign Up "}</p>
         </div>
       
       </div>
       
        
        
        </div>

        <div className={styles.cardContainer_right}>

          
      {userLoginMethod ? <p>Don't Have an Account?</p> : <p>Already Have an Account?</p>}
          <div onClick={()=>{
          setUserLogingMethod(!userLoginMethod)
         }}  className={styles.buttonWithOutline}>
          <p>{userLoginMethod ? "Sign Up " : "Sign In "}</p>
         </div>
         
        </div>

        
      </div>
      </div>
    </UserLayout>
   
  )
}

export default loginComponent