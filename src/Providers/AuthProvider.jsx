import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { app } from "../firebase/firebase.config";
// import axios from "axios";

export const AuthContext = createContext(null)
const auth = getAuth(app)



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    

    const signIn = (email,password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setloading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
             setloading(false)
})
return ()=>{
    setloading(true)
   return unsubscribe();
}
},[ ])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;