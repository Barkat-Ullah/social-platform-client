/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const LoveButton = () => {
  const [reactionCount, setReactionCount] = useState(0)
  const [isFilled, setIsFilled] = useState(false);
  const axiosSecure = useAxiosSecure();

  const toggleLove = async () => {
    try {
      const resPost = await axiosSecure.post("/reacts", {reactionCount});
      console.log(resPost);
      setReactionCount((prevCount) => prevCount + 1);
      setIsFilled((prev) => !prev);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-violet-500 hover:bg-violet-100 hover:text-violet-600 focus:bg-violet-200 focus:text-violet-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-violet-300 disabled:shadow-none disabled:hover:bg-transparent"
      onClick={toggleLove}
    >
      <span className="relative only:-mx-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill={isFilled ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
          role="graphics-symbol"
          aria-labelledby="title-81 desc-81"
        >
          <title id="title-81">Icon title</title>
          <desc id="desc-81">A more detailed description of the icon</desc>
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </span>
      <span className="ml-1">{reactionCount}</span>
    </button>
  );
};

export default LoveButton;
