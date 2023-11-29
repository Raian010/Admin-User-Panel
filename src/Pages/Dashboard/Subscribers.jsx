import { useEffect, useState } from "react";
import UsePublic from "../../Hooks/Public/UsePublic";


const Subscribers = () => {
    const axiosPublic = UsePublic();

    const [subscribers,setSubscribers]= useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        axiosPublic.get('/subscribe')
        .then(res => {
            console.log(res.data);
            setSubscribers(res.data);
            setLoading(false);
        })
    },[axiosPublic])
    return (
        <div className="md:ml-10">
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
     
      </tr>
    </thead>
    <tbody>
      
      { loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) :
        subscribers.map((subscribe,index) => <tr key={subscribe._id}>
            <th>{index+1}</th>
            <td>{subscribe.name}</td>
            <td>{subscribe.email}</td>
         
          </tr>)
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Subscribers;