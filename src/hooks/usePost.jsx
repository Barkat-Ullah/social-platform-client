import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";
// import useAxiosPublic from "./useAxiosPublic";

const usePost = (search) => {
  console.log(search);
  // const {user} = useAuth()
  // const axiosPublic = useAxiosPublic()
  const axiosSecure = useAxiosSecure();
  const {
   
    data: posts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      // const res = await axiosSecure.get(`/posts?search=${search}`);
      const res = await axiosSecure.get("/posts");

      // const res = await axiosPublic.get(`/posts?email=${user?.email}&search=${search}`)
      console.log(res.data);
      return res.data;
    },
  });

  return [posts, refetch, isLoading];
};

export default usePost;
