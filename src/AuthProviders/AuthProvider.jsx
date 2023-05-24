import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([]);
    
    const userRegister = (email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = ()=> {
        return signInWithPopup(auth,googleProvider);
    }

    const githubLogin = () =>{
        return signInWithPopup(auth,githubProvider)
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log("on state change",loggedUser);
            setUser(loggedUser);
        })
        return ()=>{
            unsubscribe();
        } 

    },[])
    const authInfo = {
        user,
        userRegister,
        userLogin,
        logOut,
        googleLogin,
        githubLogin

    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;