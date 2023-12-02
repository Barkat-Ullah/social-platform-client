import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReact = () => {
  const axiosSecure = useAxiosSecure();

  const { data: reacts = [] } = useQuery({
    queryKey: ["reacts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reacts");
      return res.data;
    },
  });
  return [reacts];
};

export default useReact;
