import initilizationauthentication from "../Firebase/firebase.initilize";
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";
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

      useEffect(()=>{
        
      },[])
      return {
        signInByGoogle,user
      }
}

export default useFirebase;