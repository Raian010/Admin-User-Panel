import { useEffect, useState } from "react";
import Shared from "../../../Components/Shared/Shared";


const Featured = () => {
    const [featured,setFeatured] = useState([]);
    useEffect(() => {
        fetch('../../../../featured.json')
        .then(res => res.json())
        .then(data => setFeatured(data))
    },[])
    return (
        <div>
            <Shared heading={"Featured Section"} sub={"Unlock your full potential"}></Shared>
           <div className="max-w-screen-lg mt-10 mx-auto">
           <div className="grid md:grid-cols-2 mx-auto gap-5">
              
              {
                  featured.map(feature => <div key={feature.id} className="card md:w-96 bg-base-100 shadow-xl">
                  <div className="card-body">
                  <figure><img className="h-[232px]" src={feature.image_url} alt="Shoes" /></figure>
                    <h2 className="card-title">{feature.title}</h2>
                    <p>{feature.description}</p>
                  </div>
                  
                </div>)
              }
          </div>
           </div>
        </div>
    );
};

export default Featured;