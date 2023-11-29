import Swal from "sweetalert2";
import Shared from "../../../Components/Shared/Shared";
import UsePublic from "../../../Hooks/Public/UsePublic";


const NewsLetter = () => {
    const axiosPublic = UsePublic();
    const hanldeAdd = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email};
        axiosPublic.post('/subscribe',user)
        .then(res => {
            if(res.data.insertedId){
                Swal.fire("Success!", "You successfully subscribed", "success");
            }
          })
        

    }
    
    return (
        <div>
            <Shared heading={"Stay Connented with Our Newsletter"} sub={"Receive Exclusive Tips, and Offers - Subscribe"}></Shared>
            <div className="mt-10">
  <div className="md:w-[600px] mx-auto p-10">
    <div className="card shadow-2xl p-5">
      <form onSubmit={hanldeAdd} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
          
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-pink-500 text-white">Subscribe Now</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default NewsLetter;