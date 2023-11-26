import { useForm } from "react-hook-form";
import SharedTitle from "../../components/SharedTitle";
import useAuth from "../../hooks/useAuth";
import { FaBook } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddPost = () => {

    const {user} = useAuth()
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async(data) => {


        const imageData = {image: data.image[0]}
        const res = await useAxiosPublic.post(image_hosting_api, imageData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        })
         
        if(res.data.success){
          const postDetails ={
            userName:user?.displayName,
            userEmail:user?.email,
            userImage:user?.photoURL,
            postName:data.post,
            tags :data.tags,
            upVote: parseFloat(data.upVote),
            downVote: parseFloat(data.downVote),
           postDetails : data.postDetails,
            image: res.data.data.display_url
          } 
    
          const resPost = await useAxiosSecure.post('/posts', postDetails)
          console.log(resPost);
          if(resPost.data.insertedId){
            reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.name} is added to the Posts.`,
                showConfirmButton: false,
                timer: 1500
              });
          }
        }
        console.log(res.data);
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
                <option value="salad">Technology</option>
                <option value="pizza">Science</option>
                <option value="soup">Art</option>
                <option value="dessert">Programming</option>
                <option value="drinks">Design</option>
                <option value="drinks">Health</option>
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
              {...register("image", { required: true })}
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