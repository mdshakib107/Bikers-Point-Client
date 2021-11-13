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
            .then((result) => {
                hanldeUserInfo(result.user.email)
                console.log(result.user.email)
            })
            .catch(error => {
                setError(error.massage)
            })
    }
    const singUpWithEmailPassword = () => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                hanldeUserInfo(result.user.email)
                console.log(result.user.email)
            })

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

    const hanldeUserInfo = (email) => {
        fetch("https://radiant-island-49212.herokuapp.com/addUser", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => console.log(result));

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