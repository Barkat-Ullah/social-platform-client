import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()

//    const {data:isAdmin, isPending:isAdminLoading} = useQuery({
//     queryKey:[user?.email],
//     // enabled: !!user?.email,
//     queryFn: async () => {
//         const res = await axiosSecure.get(`/users/admin/${user?.email}`)
//         console.log('user mail', res.data);
//         return res.data?.admin;
//     }
//    })

const { data: isAdmin, isPending: isAdminLoading } = useQuery({
    queryKey: ['admin', user?.email],
    enabled: !!(user?.email),
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      return res.data?.role === 'admin';
    }
  });

   return [isAdmin, isAdminLoading]
};

export default useAdmin;