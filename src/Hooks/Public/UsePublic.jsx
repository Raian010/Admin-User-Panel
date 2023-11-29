import axios from "axios";

const UsePublic = () => {
  const useAxiosPublic = axios.create({
    baseURL: "https://final-assignment-server-iota.vercel.app/",
  });
  return useAxiosPublic;
};

export default UsePublic;
