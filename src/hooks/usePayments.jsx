import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePayments = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
  
    const { data: payments = [] } = useQuery({
      queryKey: ["payments", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user?.email}`);
        return res.data;
      },
    });
    console.log(payments);
    return [payments]
};

export default usePayments;