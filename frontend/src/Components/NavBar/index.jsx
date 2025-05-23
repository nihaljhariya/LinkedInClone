import React from 'react';
import styles from "./styles.module.css";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '@/config/redux/reducer/authReducer';



export default function NavBarComponent() {
   
    const dispatch = useDispatch();

    const router = useRouter();

    const authState = useSelector((state)=>state.auth)


  return (
   
     <div className={styles.container}>
        <nav className={styles.navBar}>
            <h1 style={{cursor:"pointer"}} onClick= {() =>{
                router.push("/")

            }}>Pro Connect</h1>

            <div className={styles.navBarOptionContainer}>

                {authState.profileFetched && <div>
                    <div style={{display : "flex" , gap : "1.2rem"}}>
                        <p> hey Nihal</p>
                        {/* <p> hey , {authState.user.userId.name}</p> */}
                        <p style={{fontWeight:"bold" , cursor:"pointer"}}>Profile</p>
                        <p onClick={()=>{
                            localStorage.removeItem("token")
                            router.push("/login")
                            dispatch(reset())
                        }} style={{fontWeight:"bold" , cursor:"pointer"}}>Logout</p>
                        </div>
                        </div> }


             {!authState.profileFetched && <div onClick={()=>{
                    router.push("/login")
                }}  className={styles.buttonJoin}>
                    <p>Be a Part</p>

                </div> }
                
            </div>
        </nav>
     </div>
   
  )
}
