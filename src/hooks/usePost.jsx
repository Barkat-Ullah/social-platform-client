import { useQuery } from "@tanstack/react-query";

import useAxiosSecure from "./useAxiosSecure";
// import useAuth from "./useAuth";

const usePost = (search) => {
  // const {user} = useAuth()
  const axiosSecure = useAxiosSecure();
  const {
    refetch,
    data: posts = [],
    isLoading,
  } = useQuery({
    queryKey: ["posts", search],
    queryFn: async () => {
      const res = await axiosSecure.get(`/posts?search=${search}`);

      // const res = await axiosSecure.get(`/posts?email=${user?.email}`)
      console.log(res.data);
      return res.data;
    },
  });

  return [posts, refetch, isLoading];
};

export default usePost;
