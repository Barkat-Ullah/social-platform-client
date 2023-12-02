import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAnnouncement = () => {
    const axiosSecure = useAxiosSecure()
    
    const { data: announcements = [], } = useQuery({
        queryKey:['announcements'],
        queryFn: async () => {
          const res = await axiosSecure.get('/announcements')
          return res.data
        }
     
    })
    return [announcements]
};

export default useAnnouncement;