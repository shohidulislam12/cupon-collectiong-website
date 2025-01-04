import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";




export const AuthContext=createContext()
const AuthProvider = ({children}) => {
const [user,setUser]=useState(null)
const [name,setname]=useState('')
const [loader,setLoader]=useState(true)
const [inputValue, setInputValue] = useState("");
const googleProvider = new GoogleAuthProvider();
//console.log(loader,user)
    const creatUSer=(email, password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUSer=(email, password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOutUSer=()=>{
        setLoader(true)
       return signOut(auth)
       
    }
    const updateUserprofile=(updateData)=>{
            return updateProfile(auth.currentUser,updateData)
    }
    const googleLogin=()=>{
        setLoader(true)
      return  signInWithPopup(auth, googleProvider)
    }
    const setPassword=(email)=>{
        setLoader(true)
        return sendPasswordResetEmail (auth, email)
    }
    useEffect(()=>{
       const subsCribe= onAuthStateChanged(auth, (currentuser) => {
            if (currentuser) {
                
                setUser(currentuser)
                
             
     //   console.log("current user ",currentuser)
              
            } else {
          
            }
            setLoader(false)
          });
         return ()=>subsCribe() 
    },[])

    const authInfu={
        setname,creatUSer,loginUSer,logOutUSer,user,setUser,loader,setLoader,updateUserprofile,googleLogin,setPassword,inputValue, setInputValue,
    }
    return (
     <AuthContext.Provider value={authInfu}>

        {
            children
        }
     </AuthContext.Provider>
    );
};

export default AuthProvider;