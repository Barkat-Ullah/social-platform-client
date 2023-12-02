// import React from 'react';

import useAuth from "./useAuth";
import usePost from "./usePost";

const useUserPost = () => {
    const [posts, refetch] = usePost();
    // console.log(posts);
    const { user } = useAuth();
    const userPosts = posts?.filter((post) => post?.userEmail === user?.email);
    return [posts, refetch, userPosts]
};

export default useUserPost;