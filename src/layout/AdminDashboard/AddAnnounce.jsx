import { FaBook } from "react-icons/fa";
import SharedTitle from "../../components/SharedTitle";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddAnnounce = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async(data) => {

        const announcementDetails ={
            userName:user?.displayName,
            userEmail:user?.email,
            userImage:user?.photoURL,
            announcementName:data.announcement,
           announcementDetails : data.announcementDetails,
        
          } 
          console.log(announcementDetails);
          const resAnnounce = await axiosSecure.post('/announcements', announcementDetails)
          console.log(resAnnounce);

          if(resAnnounce.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.announcement} is added to the Announcement.`,
                showConfirmButton: false,
                timer: 1500
              });
          }
        //   console.log(res.data);
        }

        // console.log(data);
    

  return (
    <div>
      <SharedTitle heading="make announcement"></SharedTitle>
      <div className="my-5 ml-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full my-4">
            <label className="label">
              <span className="label-text">Announcement</span>
            </label>
            <input
              type="text"
              placeholder=" Name"
              {...register("announcement", { required: true })}
              required
              className="input input-bordered input-info w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Announcement Details</span>
            </label>
            <textarea
              {...register("announcementDetails")}
              className="textarea textarea-info textarea-bordered h-24"
              placeholder="Enter Announcement"
            ></textarea>
          </div>

          <button className="btn mt-4 text-white duration-300 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded w-full">
            Add an Announcement <FaBook></FaBook>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddAnnounce;
