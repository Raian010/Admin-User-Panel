import {  useEffect, useState } from "react";
import UsePublic from "../../Hooks/Public/UsePublic";


const AllClasses = () => {
    const axiosPublic = UsePublic();
    
    const [loading,setLoading] = useState(true);
    const [classes,setClasses] = useState([]);
    
    useEffect(() => {
        axiosPublic.get('/class')
    .then(res => {
        console.log(res.data);
        setClasses(res.data);
        setLoading(false);
    })
    },[axiosPublic]);

    return (
        <div className="mt-10">
           <h2 className="text-3xl font-bold text-center">
        All <span className="text-blue-600">Classes</span>
      </h2> 
 
      {
        loading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {
                classes.map(clas => <div key={clas._id} className="card w-96 bg-base-100 shadow-2xl">
                <div className="card-body space-y-2">
                  <h2 className="card-title font-bold">{clas.title}</h2>
                  <p className="font-medium">{clas.duration}</p>
                  <p className="font-medium">{clas.description}</p>
                  <p className="font-medium">{clas.trainer}</p>
                  <p className="font-medium">{clas.rating}</p>
                  <p className="font-medium">{clas.equipment_needed}</p>
                  <p className="font-medium">{clas.class_schedule}</p>
                </div>
                
              </div> )
            }
          </div>
          )
      }
     

        </div>
    );
};

export default AllClasses;