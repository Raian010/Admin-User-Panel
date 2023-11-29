import { Link, NavLink } from "react-router-dom";
import { FaHome,FaBriefcase,FaUser, FaForumbee, FaDashcube, FaCalendarPlus} from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";



const Navbar = () => {
   const {user,logout} = useContext(AuthContext);

   const handlelogOut = () => {
    logout()
    .then(result => {
      console.log(result);
    })
    .catch(error => console.log(error))
   }

   const links = <>
   <li><Link to="/"><FaHome></FaHome>Home</Link></li>
   <li><Link to="/gallery"><FaBriefcase></FaBriefcase>Gallery</Link></li>
   <li><Link to="/trainer"><FaUser></FaUser>Trainer</Link></li>
   <li><Link to="/classes"><FaCalendarPlus></FaCalendarPlus>Classes</Link></li>
   <li><Link to="/dashboard">
    <FaDashcube></FaDashcube>Dashboard</Link></li>
   <li><Link to="/forum"><FaForumbee></FaForumbee>
    Community</Link></li>
   </>

    return (
        <div className="navbar rounded-lg flex shadow-xl items-center bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>
    <div>
    <a className="btn btn-ghost normal-case text-xl">
         <span>
         <img className="w-[80px] md:w-[120px] hidden md:block font-bold" src="https://i.postimg.cc/C5sSbpTZ/i-love-gym-logo-icon-fitness-center-dumbell-and-heart-health-care-concept-stock-vector-illustration.jpg" alt="" /> 
        </span>
        <span className="font-semibold mb-20 md:mb-0">Fitness Freak</span>
    </a>
 
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end mr-10">
  {
            user ?
            <div>
              <div className="flex items-center justify-center">
              <span className="font-bold">
              {
              user ?
                <span>
                  <img className={user.photoURL ? 'hidden md:block h-[50px] rounded-full p-1' : ""} src={user ? user.photoURL : ""} alt="" />
                  </span>
                   : "" }
               </span>
               <Link to="/login"><button onClick={handlelogOut} className="btn btn-neutral ml-20 btn-sm">Logout</button></Link>
              </div>
              

               </div> :
            <NavLink to="/login"><button className="btn btn-primary">Login</button></NavLink>
            
          }
  </div>
</div>
    );
};

export default Navbar;