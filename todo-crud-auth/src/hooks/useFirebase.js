import initilizationauthentication from "../Firebase/firebase.initilize";
import { GoogleAuthProvider } from "firebase/auth";

initilizationauthentication();
const useFirebase = () =>{
         const googleProvider = new GoogleAuthProvider()
}

export default useFirebase;