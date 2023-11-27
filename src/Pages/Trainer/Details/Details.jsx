import { Link, useLoaderData, useParams } from "react-router-dom";

const Details = () => {
    const details = useLoaderData();
    console.log(details);
    const {id} = useParams();
    console.log(id);
    const trainer = details.find(detail => detail.id == id)
    console.log(trainer);
    const {name,description,time_slot,experience,img} = trainer;
    console.log(name,description,time_slot,experience);

    return (
        <div className="mt-10">
            <div className="card mx-auto md:w-[700px] bg-base-100 shadow-xl">
  <figure><img className="w-full h-[400px]" src={img} /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
<div className="mx-auto md:w-[600px] bg-base-100 shadow-xl p-5 mt-10">
    <img className="w-full" src="https://i.postimg.cc/t48mxxkZ/personal-trainer-arms-crossed-gym-260nw-493318507-1.jpg" />
    <h2 className="font-medium my-3">If you think you will be a good trainer then click down below and we will select you,if you are good enough</h2>
    <Link to="/form" className="btn bg-pink-500 w-full">Be a Trainer</Link>
</div>
        </div>
    );
};

export default Details;