import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex justify-center">
          <div>
          <img className="w-[500px]" src="https://i.postimg.cc/7hRyy3zV/1000-F-244152377-5r-Xw-YUcxs-Sq2-Vribk-W5yjfg7f-Ekp78-J3-1.jpg" /> 
           <p className="text-5xl font-bold text-center">404 Error</p>
           <div className="flex justify-center mt-4">
           <Link to="/" className="btn btn-neutral">Back to Home</Link>
           </div>
          </div>
        </div>
    );
};

export default ErrorPage;