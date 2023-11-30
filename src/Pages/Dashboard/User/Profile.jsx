import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";


const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div className="mx-auto lg:w-1/2">
            <div className="card bg-base-100 shadow-xl">
  <figure><img src={user.photoURL}/></figure>
  <div className="card-body">
    <h2 className="card-title text-xl">User Name- <span className=" text-3xl font-bold">{user.displayName}</span></h2>
    <p className="text-lg">User Email - <span className="text-xl font-semibold">{user.email}</span></p>
    <div className="card-actions justify-end">
      <Link to="/dashboard/update" className="btn btn-primary">Update Info</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Profile;