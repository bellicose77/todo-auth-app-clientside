import initilizationauthentication from "../Firebase/firebase.initilize";
import { GoogleAuthProvider,getAuth, signInWithPopup,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initilizationauthentication();
const useFirebase = () =>{
    const [user ,setUser] = useState({});
      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth();

      const signInByGoogle = () =>{
           signInWithPopup(auth,googleProvider)
           .then(result => {
            console.log(result.user)
            setUser(result.user)}
            )
      }
      const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
      }

      useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
            {
                console.log("is",user);
                setUser(user);
            }

        })
      },[])
      return {
        signInByGoogle,user,logOut
      }
}

export default useFirebase;