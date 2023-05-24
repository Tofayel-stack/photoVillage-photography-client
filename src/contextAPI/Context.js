import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';




export const AuthContext = createContext()



const Context = ({children}) => {
    const [user, setUser] = useState(null)
    const [loadData,setLoadData] = useState(true)
    const googelProvider = new GoogleAuthProvider();
    const auth = getAuth(app);



    const loginWithGoogle = () =>{
        setLoadData(true)
       return signInWithPopup(auth, googelProvider)
    }


    const createUserbyEmailandPass = (email, password) => {
        setLoadData(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const loginByEmailandPass = (email, password)=>{
        setLoadData(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = ()=>{
        return signOut(auth)
    }
    
    
    useEffect(()=>{
        let unsubscribe = onAuthStateChanged(auth, (currentUser) => {
           setUser(currentUser)
           setLoadData(false)
          })
          return () => {
            unsubscribe()
          }
    },[])





    const authInfo = {user,loadData,setLoadData,loginWithGoogle,loginByEmailandPass,createUserbyEmailandPass,logOutUser}

   return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
   )
  
};

export default Context;