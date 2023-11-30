import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/Admin/useAdmin";
import { AuthContext } from "./AuthProvider";


const AdminRoute = ({children}) => {
    const [isAdmin,isAdminLoading] = useAdmin();
    const {user,isLoading} = useContext(AuthContext);
    const location = useLocation();
    // const navigate = useNavigate()
    if(isLoading || isAdminLoading){
        return <p>It is Loading</p>
    }

    if(user && isAdmin){
        return children
    }
    return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default AdminRoute;