import { useContext } from "react";

import { Navigate } from "react-router-dom";
import {useLocation} from "react-router-dom"
import { AuthContext } from "./AuthProvider";


const Private = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
 
    if(loading){
        return <p>It is Loading</p>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default Private;