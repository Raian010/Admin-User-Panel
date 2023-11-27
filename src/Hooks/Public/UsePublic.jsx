import axios from "axios";


const UsePublic = () => {
    const useAxiosPublic = axios.create({
        baseURL: "http://localhost:5000/"
    })
    return useAxiosPublic;
};

export default UsePublic;