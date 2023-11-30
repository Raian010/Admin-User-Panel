import { useContext } from "react";

import { Navigate } from "react-router-dom";
import {useLocation} from "react-router-dom"
import { AuthContext } from "./AuthProvider";



const Private = ({children}) => {
    const {user,isLoading} = useContext(AuthContext);
    const location = useLocation();
 
    if(isLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default Private;