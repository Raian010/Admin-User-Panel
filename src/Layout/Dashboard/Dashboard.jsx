import {  Outlet } from "react-router-dom";
import SideBar from "../../Pages/Dashboard/SideBar/SideBar";
import { Helmet } from "react-helmet-async";



const Dashboard = () => {
    return (
        <div>
            <Helmet>
        <title>Fitness freak | Dashboard</title>
      </Helmet>
      <div className="flex">
            <SideBar></SideBar>
            <div className="flex-1 w-2/3">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
      
    );
};

export default Dashboard;