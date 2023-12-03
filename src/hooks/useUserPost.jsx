// import React from 'react';

import useAuth from "./useAuth";
import usePost from "./usePost";

const useUserPost = () => {
    const [posts, refetch] = usePost();
    console.log(posts);
    const { user } = useAuth();
    const userEmail = user?.email || ''; 
    const userPosts = posts?.filter((post) => post?.userEmail === userEmail);
    
    return [posts, refetch, userPosts]
};

export default useUserPost;