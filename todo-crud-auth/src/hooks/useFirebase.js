import initilizationauthentication from "../Firebase/firebase.initilize";
import { GoogleAuthProvider,getAuth, signInWithPopup } from "firebase/auth";

initilizationauthentication();
const useFirebase = () =>{
      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth();

      const signInGoogle = () =>{
           signInWithPopup(auth,googleProvider)
      }
}

export default useFirebase;