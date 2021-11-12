import { useEffect, useState } from "react"
import initAuthintication from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";

initAuthintication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name, setName] = useState('');
    const [error, setError] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.massage)
            })
    }
    const singUpWithEmailPassword = () => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const singInWithEmailPassword = () => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handaleEmail = e => {
        setEmail(e.target.value);
    }
    const handalePassword = e => {
        setPassword(e.target.value);
    }
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            window.location.reload()
        }).catch((error) => {
            setError(error)
        });
    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, []);
    return {
        name,
        email,
        password,
        user,
        error,
        isLoading,
        updateName,
        setIsLoading,
        singInWithGoogle,
        setError,
        handleNameChange,
        setUserName,
        handaleEmail,
        handalePassword,
        singUpWithEmailPassword,
        singInWithEmailPassword,
        logOut
    }
}
export default useFirebase;