import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import UsePublic from "../../../Hooks/Public/UsePublic";
import Swal from "sweetalert2";


const Packages = () => {
    const packs = useLoaderData();
    const {id} = useParams();
    const pack = packs.find(pack => pack.id == id)
    const {packages} = pack;

    const {user} = useContext(AuthContext);

    const axiosPublic = UsePublic();

    const handleJoin = pack => {
        console.log(pack);
        const newIncomer = {
            email: user?.email,
            name: user?.displayName,
            pack: pack
        };

        axiosPublic.post('/join',newIncomer)
        .then((res) => {
            const result = res.data;
            console.log(result);
            if (result.insertedId) {
              Swal.fire("Success!", "You successfully joined the package", "success");
            }
          });
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {packages.map(pack => <div key={pack.id} className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">{pack.name}</h2>
    <p className="h-[96px] font-medium">{pack.description}</p>
    <p className="font-semibold">Time- {pack.time} minutes</p>
    <p className="font-semibold">Price- {pack.price}$</p>
    <p className="font-medium">{
        pack.features.map(feature => <span className="mr-2" key={feature.id}>
            {feature},
        </span>)
        }</p>
    <div className="card-actions mt-3 justify-end">
      <button onClick={() => handleJoin(pack.name)} className="btn btn-primary">Join Now</button>
    </div>
  </div>
</div>)}
        </div>
    );
};

export default Packages;