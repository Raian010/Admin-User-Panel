import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";
import UsePublic from "../Hooks/Public/UsePublic";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const axiosPublic = UsePublic();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const signUp = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setIsLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
  
      setIsLoading(false);
      setUser(currentUser);
      if(currentUser){
        const userInfo = {email: currentUser.email};
        axiosPublic.post('/jwt',userInfo)
        .then(res => {
         console.log(res.data);
         if(res.data.token){
             localStorage.setItem('access-token',res.data.token);
             setIsLoading(false)
         }
         
        })
     }
     else{
         localStorage.removeItem('access-token')
         setIsLoading(false)
     }
      
      console.log(currentUser);
     
    
    });
    return () => {
      return unSubscribe();
    };
  }, [user]);

  // google login
  const provider = new GoogleAuthProvider();
  const googleSIgn = () => {
      return signInWithPopup(auth,provider)
  }

    const authInfo = {user,signUp,login,logout,isLoading,googleSIgn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;