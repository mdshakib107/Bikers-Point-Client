import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initAuthintication = () => {
    initializeApp(firebaseConfig);
}
export default initAuthintication;