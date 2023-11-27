import { useEffect, useState } from "react";
import Shared from "../../../Components/Shared/Shared";


const FeaturedClasses = () => {
    const [classes,setClasses] = useState([]);
    useEffect(() => {
        fetch('../../../../classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div>
            <Shared heading={"Explore our Featured Classes"} sub={"Transform Your Fitness with different workouts"}></Shared>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                  classes.map(classItem =>  <div key={classItem.id} className="card md:w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                  <figure><img className="h-[232px]" src={classItem.image} alt="Shoes" /></figure>
                    <h2 className="card-title">{classItem.name}</h2>
                    <p className="text-lg font-medium">{classItem.instructor}</p>
                    <p>{classItem.description}</p>
                    <p>${classItem.price}/session</p>
                  </div>
                  
                </div>)
              }
            </div>
            
        </div>
    );
};

export default FeaturedClasses;