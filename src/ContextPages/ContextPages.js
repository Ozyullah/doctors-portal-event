import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";



export const AuthContext= createContext()
const auth =getAuth(app)

const ContextPages = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState()

    // user Create method system with Email and Password

    const userCreatWithEmail =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // signin method with Email and password

    const userSignInWithPassword =(email, password)=>{
       return signInWithEmailAndPassword(auth, email, password)
    }

    // signIn With google account

    const signInWithGoogle =(provider)=>{
        return signInWithPopup(auth, provider);
    }


    // Email verification system

    const emailVerification =()=>{
        return sendEmailVerification(auth.currentUser);
    }

    // User Sign out system

    const userSignOut =()=>{
        signOut(auth)
    }

    // user profile update system

    const userProfileUpdate =(displayName,photoURL)=>{
        updateProfile(auth.currentUser,{displayName, photoURL})
    }


    // User Observer method Setup

   useEffect(()=>{
    const unSubscribe =onAuthStateChanged(auth, currentUser=>{
        setUser(currentUser);
    });

    return ()=>unSubscribe()
   },[])

    const mainValue ={
        userCreatWithEmail,
        userSignInWithPassword,
        signInWithGoogle,
        emailVerification,
        userSignOut,
        userProfileUpdate,
        auth,
        user
    }
    return (
        <AuthContext.Provider value={mainValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextPages;