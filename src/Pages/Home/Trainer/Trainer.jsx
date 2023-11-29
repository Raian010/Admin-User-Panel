import { useEffect, useState } from "react";
import Shared from "../../../Components/Shared/Shared";


const Trainer = () => {
    const [trainers,setTrainers] = useState([]);
    useEffect(() => {
        fetch('/trainers.json')
        .then(res => res.json())
        .then(data => setTrainers(data))
    },[])
    return (
        <div>
            <Shared heading={"Meet Our Expert Trainers"} sub={"Dedicated Professionals Comitted to Your Fitness Journey"}></Shared>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {
                    trainers.map(trainer => <div key={trainer.id} className="card md:w-96 bg-base-100 shadow-xl">
                    <figure><img className="h-[282px] w-full" src={trainer.image} alt="Shoes" /></figure>
                    <div className="card-body">
                      <h2 className="card-title font-bold">{trainer.name}</h2>
                      <p className="font-medium">{trainer.description}</p>
                      <p className="font-semibold">{trainer.experience}</p>
                      {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                      </div> */}
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Trainer;