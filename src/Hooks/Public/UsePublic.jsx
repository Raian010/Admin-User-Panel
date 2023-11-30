import axios from "axios";

const UsePublic = () => {
  const useAxiosPublic = axios.create({
    // baseURL: "https://final-assignment-server-iota.vercel.app/",
    baseURL: "http://localhost:5000",
  });
  return useAxiosPublic;
};

export default UsePublic;
