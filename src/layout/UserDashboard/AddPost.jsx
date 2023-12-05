import { useForm } from "react-hook-form";
import SharedTitle from "../../components/SharedTitle";
import useAuth from "../../hooks/useAuth";
import { FaBook } from "react-icons/fa";
// import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserPost from "../../hooks/useUserPost";
import usePayments from "../../hooks/usePayments";
import useAxiosPublic from "../../hooks/useAxiosPublic";
// import usePost from "../../hooks/usePost";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
console.log(image_hosting_key);

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
console.log(  "api",image_hosting_api);

const AddPost = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic()

  const [payments] = usePayments();
  console.log(payments);
  const paymentEmail = payments.length > 0 ? payments[0].email : null;
  console.log(paymentEmail);


  const [, refetch, userPosts] = useUserPost();
  // const [posts] = usePost()
  console.log(userPosts.length);
  const userPostCount = userPosts.length;

  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    if (userPostCount < 5 || user?.email === paymentEmail) {
      const originalDate = new Date();

      const formattedDate = `${originalDate.getFullYear()}-${(
        originalDate.getMonth() + 1
      )
        .toString()
        .padStart(2, "0")}-${originalDate
        .getDate()
        .toString()
        .padStart(2, "0")} ${originalDate
        .getHours()
        .toString()
        .padStart(2, "0")}:${originalDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${originalDate
        .getSeconds()
        .toString()
        .padStart(2, "0")}`;

      const imageData = { image: data.image[0] };
      console.log(imageData);
      const res = await axiosPublic.post(image_hosting_api, imageData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data);

      if (res.data.success) {
        const postDetails = {
          userName: user?.displayName,
          userEmail: user?.email,
          userImage: user?.photoURL,
          postName: data?.post,
          tags: data?.tags,
          upVote: parseFloat(data?.upVote),
          downVote: parseFloat(data?.downVote),
          postDetails: data?.postDetails,
          image: res.data?.data?.display_url,
          postTime: formattedDate,
        };
        console.log(postDetails);
        const resPost = await axiosSecure.post("/posts", postDetails);
        console.log(resPost);
        if (resPost.data?.insertedId) {
          refetch();
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data?.post} is added to the Posts.`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
      console.log(res.data);
    } else {
      Swal.fire({
        title: "Pay for More Posts",
        text: "You have reached your post limit. Please visit the membership page to add more posts.",
        showCancelButton: true,
        confirmButtonText: "Go to Membership Page",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/members";
        }
      });
    }
  };
  return (
    <div>
      <div>
        <SharedTitle heading="add a post"></SharedTitle>

        <div className="my-5 ml-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full my-4">
              <label className="label">
                <span className="label-text">Post Name*</span>
              </label>
              <input
                type="text"
                placeholder="Post Name"
                {...register("post", { required: true })}
                required
                className="input input-bordered input-info w-full"
              />
            </div>
            <div className="flex gap-6">
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Tags*</span>
                </label>
                <select
                  {...register("tags", { required: true })}
                  className="select select-bordered select-info w-full"
                >
                  <option disabled selected>
                    Select a tag
                  </option>
                  <option value="technology">Technology</option>
                  <option value="science">Science</option>
                  <option value="art">Art</option>
                  <option value="programming">Programming</option>
                  <option value="design">Design</option>
                  <option value="health">Health</option>
                </select>
              </div>

              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Up vote*</span>
                </label>
                <input
                  type="number"
                  placeholder="Up vote"
                  defaultValue={0}
                  {...register("upVote", { required: true })}
                  className="input input-bordered input-info w-full"
                />
              </div>
              <div className="form-control w-full my-6">
                <label className="label">
                  <span className="label-text">Down vote*</span>
                </label>
                <input
                  type="number"
                  placeholder="Down vote"
                  defaultValue={0}
                  {...register("downVote", { required: true })}
                  className="input input-bordered input-info w-full"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Post Details</span>
              </label>
              <textarea
                {...register("postDetails")}
                className="textarea textarea-info textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </div>

            <div className="form-control w-full my-6">
              <input
                {...register("image")}
                type="file"
                className="textarea textarea-info textarea-bordered file-input w-full max-w-xs"
              />
            </div>

            <button className="btn text-white duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded w-full">
              Add Post <FaBook></FaBook>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
