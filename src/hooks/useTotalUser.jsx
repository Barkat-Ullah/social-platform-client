import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useTotalUser = () => {
    const axiosSecure = useAxiosSecure()
    
    const { data: users = [], } = useQuery({
        queryKey:['users'],
        queryFn: async () => {
          const res = await axiosSecure.get('/users')
          return res.data
        }
     
    })
    return [users]
};

export default useTotalUser;