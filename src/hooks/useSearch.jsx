// import React from 'react';

import { useEffect } from "react";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosPublic from "./useAxiosPublic";
import { useState } from "react";

const useSearch = (search) => {
  const [searchPost, setSearchPost] = useState([]);
  // const axiosSecure = useAxiosSecure()
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic(`/posts?search=${search}`).then((res) => {
      console.log(res.data);
      setSearchPost(res.data);
    });
  }, [search, axiosPublic]);
  return searchPost;
};

export default useSearch;
