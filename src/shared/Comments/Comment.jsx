// import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineReport } from "react-icons/md";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Comment = ({ comment }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const { postComments, title, userEmail, _id } = comment;
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const reportDetails = {
      userName: user?.displayName,
      userEmail: user?.email,
      postEmail: userEmail,
      reportComments:postComments,
      report: data.feedback,
    };
    const resPost = await axiosSecure.post("/reports", reportDetails);
    console.log(resPost);
    if (resPost.data?.insertedId) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your Feedback successfully added",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    // console.log(data);
  };
  const handleEnable = (e) => {
    e.preventDefault;
    console.log(e);
  };

  return (
    <div className="">
      <div className="card w-full text-center bg-violet-700 text-primary-content">
        <div className="card-body text-left">
          <h2 className="card-title">Post title : {title}</h2>
          <p>User comments : {postComments}</p>
          <span className="text-xl">User comments : {userEmail}</span>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center space-x-2">
              <div className="my-2">
                <select
                  onBlur={handleEnable}
                  {...register("feedback", { required: true })}
                  className="select select-accent text-black w-full max-w-xs"
                >
                  <option disabled selected>
                    Set a Reaction
                  </option>
                  <option value="Inappropriate">Inappropriate</option>
                  <option value="Spam">Spam</option>
                  <option value="Offensive">Offensive</option>
                </select>
              </div>
              <div className="inline-block">
                <button type="submit" className="btn bg-white">
                  <MdOutlineReport className="text-red-600" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Comment;
