import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../Provider/AuthProvider";
import UseaxiosSecure from "../UseaxiosSecure";




const useAdmin = () => {
   const {user,isLoading} = useContext(AuthContext);
   const axiosSecure = UseaxiosSecure();
   const {data: isAdmin,isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    enabled: !isLoading,
    queryFn: async() => {
        const res = await axiosSecure.get(`/users/${user.email}`);
        console.log(res);
        return res.data?.admin
    }
   });
   return [isAdmin,isAdminLoading];
};

export default useAdmin;