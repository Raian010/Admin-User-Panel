import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const Trainer = () => {
    const [trainers,setTrainers] = useState([]);
    useEffect(() => {
        fetch('/trainers2.json')
        .then(res => res.json())
        .then(data => setTrainers(data))
    },[])
    return (

      <div>
        <Helmet>
        <title>Fitness freak | Trainer</title>
      </Helmet>
        <h2 className="text-4xl my-10 font-bold text-center">
      Our <span className="text-blue-600">Trainers</span>
    </h2> 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
           {
            trainers.map(trainer => <div key={trainer.id} className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-[290px] w-full" src={trainer.img} /></figure>
            <div className="card-body">
              <h2 className="card-title font-bold">{trainer.name}</h2>
             <div className="flex items-center">
              <p>Available slot-  </p>
             <Link to={`/package/${trainer.id}`} className="btn btn-success font-normal">{trainer.time_slot} slot</Link>
             </div>
              <p className="font-medium">{trainer.experience}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${trainer.id}`} className="btn btn-primary">Know more</Link>
              </div>
            </div>
          </div>)
           }
        </div>
      </div>


      
       
    );
};

export default Trainer;