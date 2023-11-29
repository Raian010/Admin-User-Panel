import { NavLink } from "react-router-dom";
// import useAdmin from "../../../Hooks/Admin/useAdmin";




const SideBar = () => {
    const isAdmin = true;

    return (
        <div className="w-64 min-h-screen bg-blue-500">
            <ul className="menu text-white text-center">
                {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard/subscribe">All Subscribers</NavLink></li>
                        <li><NavLink to="/dashboard/trainers">All Trainers</NavLink></li>
                        <li><NavLink to="/dashboard/applied">Applied Trainers</NavLink></li>
                        <li><NavLink to="/dashboard/balance">Balance</NavLink></li>
                    </> :
                    <>
                        <li><NavLink to="/dashboard/userHome">Activity Log</NavLink></li>
                        <li><NavLink to="/dashboard/reservation">Profile Settings</NavLink></li>
                        <li><NavLink to="/dashboard/review">Recommended Classes</NavLink></li>    
                        </>
                }
            </ul>
            <div className="divider"></div>
            <ul className="text-white text-center" >
                <li><NavLink to="/">Home</NavLink></li>
                
            </ul>
        </div>
    )
};
export default SideBar;