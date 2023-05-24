import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from "../Firebase/FirebaseConfig";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState([]);
    const [loading,setLoading] = useState(true);
    
    const userRegister = (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleLogin = ()=> {
        setLoading(true);
        return signInWithPopup(auth,googleProvider);
    }

    const githubLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
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
        githubLogin,
        loading

    }

    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;