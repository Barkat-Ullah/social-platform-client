/* eslint-disable react/no-unknown-property */
import { useLoaderData } from "react-router-dom";
import LoveButton from "../../components/LoveButton";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ShareButton from "../../shared/ShareButton";

const PostDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const post = useLoaderData();
  const {
    image,
    _id,
    userImage,
    postDetails,
    userName,
    tags,
    upVote,
    postName,
    postTime,
  } = post;
  console.log(post);

  const onSubmit = async (data) => {
    const details = {
        postComments:data?.comments,
        title:post.postName,
        userEmail:user?.email,
    }
    console.log(details);
    const resPost = await axiosSecure.post("/comments", details);
    console.log(resPost);
    if (resPost.data?.insertedId) {
      reset();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: 'Your comments will be added to the Posts.',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="pt-20">
      <div className="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
        <div className="p-6">
          <header className="flex gap-4">
            <div className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
              <img
                src={userImage}
                className="rounded-full"
                alt={`Profile of ${userName}`}
                width="48"
                height="48"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-700">{userName}</h3>
              <p className="text-sm text-slate-400"> {postTime}</p>
            </div>
          </header>
        </div>
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold lg:text-4xl text-transparent bg-gradient-to-br bg-clip-text from-teal-500 via-indigo-500 to-sky-500 dark:from-teal-200 dark:via-indigo-300 dark:to-sky-500 ">
                {postName}
              </h1>
              <p className="mt-2">{postDetails}</p>
              Topics of {tags}
            </div>

            <div className="w-full mt-8 bg-transparent border rounded-md lg:max-w-sm dark:border-gray-700 focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 dark:focus-within:border-blue-400 focus-within:ring-opacity-40">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col lg:flex-row"
              >
                <input
                  
                  type="text"
                  name="search"
                  {...register("comments")}
                  placeholder="Write a comments ...."
                  className="flex-1 h-10 px-4 py-2 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                />

                <button
                  type="submit"
                  value="search"
                  className="h-10 px-4 py-2 m-1 text-white transition-colors duration-300 transform bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl"
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="flex justify-start items-center gap-2 mt-4 p-2 pt-0">
              <LoveButton id={_id}/>
              <ShareButton post={post}></ShareButton>
{/* 
              <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 rounded justify-self-center whitespace-nowrap text-violet-500 hover:bg-violet-100 hover:text-violet-600 focus:bg-violet-200 focus:text-violet-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-violet-300 disabled:shadow-none disabled:hover:bg-transparent">
                <span className="relative only:-mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-3xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="1.5"
                    role="graphics-symbol"
                    aria-labelledby="title-82 desc-82"
                  >
                    <title id="title-82">Icon title</title>
                    <desc id="desc-82">
                      A more detailed description of the icon
                    </desc>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </span>
              </button> */}
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl"
              src={image}
              alt="glasses photo"
            />
          </div>
        </div>

        {/* 
          <form>
            <div className="join mt-4">
              <input
                className="input input-bordered input-accent w-full max-w-4xl join-item"
                placeholder="Write a comments "
              />
              <input
                type="submit"
                value="Submit"
                className="btn text-white duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 join-item rounded-r-full"
              />
            </div>
          </form> */}
      </div>
    </div>
  );
};

export default PostDetails;
