/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { FaArrowAltCircleRight } from "react-icons/fa";

import { Link } from "react-router-dom";
import useReact from "../../hooks/useReact";
import useComments from "../../hooks/useComments";

const SinglePost = ({ post }) => {
  const { image, _id, userName, tags, postName, postTime } = post;
  const [reacts] = useReact()
  const [comments] = useComments()
 

  return (
    <div>
      <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-lg p-10">
        <div className="">
          <div className="relative">
            <img
              className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
              src={image}
              alt=""
            />

            <div className="absolute bottom-0 flex p-3 bg-white dark:bg-gray-900 ">
              <img
                className="h-10 w-10 rounded-full"
                src={post?.userImage}
                alt=""
              />

              <div className="mx-4">
                <h1 className="text-sm text-gray-700 dark:text-gray-200">
                  {userName}
                </h1>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Published on {postTime}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h1 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white">
            {postName}
          </h1>

          <hr className="w-32 my-3 text-blue-500" />

          <p className="text-sm text-gray-500 dark:text-gray-400">
            Topics of {tags}
          </p>

          <div className="mt-2">
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
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
              {reacts.length}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                 className="w-6 h-6"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              {comments.length}
            </span>
          </div>

          <Link to={`/post/${_id}`}>
            <button className="inline-flex items-center justify-center h-10 gap-2  text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-purple-500 hover:bg-purple-100 hover:text-purple-600 focus:bg-purple-200 focus:text-purple-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-purple-300 disabled:shadow-none disabled:hover:bg-transparent mt-2 ">
              <span className="">Read more</span>{" "}
              <FaArrowAltCircleRight className="text-lg" />
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SinglePost;
