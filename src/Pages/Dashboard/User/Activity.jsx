import { useContext, useEffect, useState } from "react";
import UsePublic from "../../../Hooks/Public/UsePublic";
import { AuthContext } from "../../../Provider/AuthProvider";


const Activity = () => {
    const axiosPublic = UsePublic();
    const {user} = useContext(AuthContext);
    
    const [activities,setActivities]= useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axiosPublic.get(`/join/${user?.email}`)
        .then(res => {
            // console.log(res.data);
            setActivities(res.data);
            setLoading(false);
        })
    },[axiosPublic,user?.email])
    return (
        <div className="md:ml-10">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
        <th>User Email</th>
        <th>Trainer Name</th>
        <th>Pack</th>
        <th>Time SLot</th>
      </tr>
    </thead>
    <tbody>
      
      { loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) :
        activities.map((activity,index) => <tr key={activity._id}>
            <th>{index+1}</th>
            <td>{activity.name}</td>
            <td>{activity.email}</td>
            <td>{activity.trainer_name}</td>
            <td>{activity.pack}</td>
            <td>{activity.time_slot} hour/day</td>
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Activity;