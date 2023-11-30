import axios from "axios";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";



const axiosSecure = axios.create({
  baseURL: "https://final-assignment-server-iota.vercel.app/",
  // baseURL: "http://localhost:5000"
});

const UseaxiosSecure = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      console.log("request stopped by interceptor", token);
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Interceptor Response

  axiosSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("error in the interceptor", status);
      if (status === 401 || status === 403) {
        await logout();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default UseaxiosSecure;
