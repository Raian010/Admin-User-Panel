import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Update = () => {
    const {user} = useContext(AuthContext);
    
    const handleUpdate = e => {
        e.preventDefault();
        Swal.fire("Success!", "You Updated successfully", "success");
    }
    return (
        <div className="mt-10">
            <div className=" w-1/2 mx-auto bg-base-100">
  <div>
    <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Update Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" defaultValue={user?.displayName} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Update Photo</span>
          </label>
          <input type="text" name="photo" placeholder="Photo" className="input input-bordered" defaultValue={user.photoURL} required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Update Info</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Update;