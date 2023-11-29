import { useEffect, useState } from "react";
import UsePublic from "../../Hooks/Public/UsePublic";


const Trainers = () => {
    
        const axiosPublic = UsePublic();
    
        const [trainers,settrainers]= useState([]);
        const [loading,setLoading] = useState(true);
        useEffect(() => {
            axiosPublic.get('/trainers')
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
            <th>Time Slots</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
          { loading ? (
                <span className="loading loading-spinner loading-lg"></span>
              ) :
            trainers.map((trainer,index) => <tr key={trainer._id}>
                <th>{index+1}</th>
                <td>{trainer.name}</td>
                <td>{trainer.time_slot} hour</td>
                <td><button className="btn btn-primary">Pay</button></td>
              </tr>)
          }
          
        </tbody>
      </table>
    </div>
            </div>
        );
        };

export default Trainers;