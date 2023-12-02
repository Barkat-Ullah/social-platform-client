import { FaTrashAlt } from "react-icons/fa";
import SharedTitle from "../../components/SharedTitle";
// import useAuth from "../../hooks/useAuth";
// import usePost from "../../hooks/usePost";
import useReact from "../../hooks/useReact";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useUserPost from "../../hooks/useUserPost";
import { Link } from "react-router-dom";

const MyPost = () => {
  const axiosSecure = useAxiosSecure();
  // const [posts, refetch] = usePost();
  // console.log(posts);
  // const { user } = useAuth();
  const [, refetch, userPosts] = useUserPost();
  const [reacts] = useReact();

  // const userPosts = posts?.filter((post) => post?.userEmail === user?.email);
  console.log(userPosts.length);
  // const { _id } = userPosts;

  const handleDeleteUser = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/posts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      {/* <h2>my post</h2>   */}
      <SharedTitle heading={`My post`}></SharedTitle>
      <div>
        <div className="overflow-x-auto mx-3">
          <table className="table">
            <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-t-lg">
              <tr>
                <th>#</th>
                <th>Post Title</th>
                <th>Total Reacts</th>
                <th>Comments</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {userPosts.map((userPost, index) => (
                <tr key={userPost._id}>
                  <td>{index + 1}</td>

                  <td>{userPost.postName}</td>
                  <td>{reacts.length}</td>
                  <td>
                    <Link to={`/comments/${userPost._id}`}>
                      <button className=" btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
                        Show Comments
                      </button>
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(userPost._id)}
                      className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded"
                    >
                      <FaTrashAlt className="text-white"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPost;
