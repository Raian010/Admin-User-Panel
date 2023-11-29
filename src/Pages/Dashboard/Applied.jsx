import { useEffect, useState } from "react";
import UsePublic from "../../Hooks/Public/UsePublic";


const Applied = () => {
    const axiosPublic = UsePublic();
    
        const [trainers,settrainers]= useState([]);
        const [loading,setLoading] = useState(true);
        useEffect(() => {
            axiosPublic.get('/trainer')
            .then(res => {
                console.log(res.data);
                settrainers(res.data);
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
            <th>Email</th>
            <th>Age</th>
            <th>Time per week</th>
            <th>Time per Day</th>
          </tr>
        </thead>
        <tbody>
          
          { loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) :
            trainers.map((trainer,index) => <tr key={trainer._id}>
                <th>{index+1}</th>
                <td>{trainer.name}</td>
                <td>{trainer.email} hour</td>
                <td>{trainer.age}</td>
                <td>{trainer.week} hour/week</td>
                <td>{trainer.day} hour/day</td>
              </tr>)
          }
          
        </tbody>
      </table>
    </div>
            </div>
        );
};

export default Applied;