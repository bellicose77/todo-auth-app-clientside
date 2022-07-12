import initilizationauthentication from "../Firebase/firebase.initilize";
import { GoogleAuthProvider,getAuth } from "firebase/auth";

initilizationauthentication();
const useFirebase = () =>{
      const googleProvider = new GoogleAuthProvider();
      const auth = getAuth();

      const signInGoogle = () =>{
        
      }
}

export default useFirebase;