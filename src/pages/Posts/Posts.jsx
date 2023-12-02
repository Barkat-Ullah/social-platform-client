import { useState } from "react";
import SharedTitle from "../../components/SharedTitle";
import usePost from "../../hooks/usePost";
import SinglePost from "./SinglePost";
import { GrPrevious, GrNext } from "react-icons/gr";

const Posts = () => {
  //   const [posts] = usePost();
  const [search, setSearch] = useState("");
  const [posts] = usePost(search);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstItem, indexOfLastItem);
  const totalItems = posts.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  console.log(posts);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;
    console.log(searchText);
    setSearch(searchText);
  };

  return (
    <div>
      <SharedTitle heading={`latest posts! you can read`}></SharedTitle>

      <div className="flex items-center justify-center">
        <div className="w-full  mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
          <form onSubmit={handleSearch} className="flex flex-col lg:flex-row">
            <input
              type="text"
              name="search"
              placeholder="Enter Search ...."
              className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
            />

            <button
              type="submit"
              value="search"
              className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        {currentPosts.map((post) => (
          <SinglePost key={post._id} post={post}></SinglePost>
        ))}
      </div>

      <div className="flex justify-end items-center gap-2 my-8">
        <button
          className=" btn btn-outline btn-info"
          onClick={handlePreviousPage}
        >
          <GrPrevious></GrPrevious>
        </button>
        <button className=" btn btn-outline btn-info" onClick={handleNextPage}>
          <GrNext></GrNext>
        </button>
      </div>
    </div>
  );
};

export default Posts;
