import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt,  } from "react-icons/fa";


const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    
    const {refetch, data: users = [], } = useQuery({
        queryKey:['users'],
        queryFn: async () => {
          const res = await axiosSecure.get('/users')
          return res.data
        }
     
    })

    const handleMakeAdmin = user => {
        console.log(user);
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} has been Admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            }
        })
    }

    const handleDeleteUser = user =>{
        console.log(user);
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
              axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
    }

    return (
        <div>
        <div className="flex justify-evenly my-5">
          <h2 className="text-3xl">All users</h2>
          <h2 className="text-3xl">Total Users {users.length}</h2>
        </div>
        <div className="overflow-x-auto mx-3">
          <table className="table">
            <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-lg">
              <tr className="text-white">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                 
                  <td className="text-purple-500">{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                      { user.role === 'admin' ? "Admin" : <button   onClick={() => handleMakeAdmin(user)} className="btn text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg">
                         Make Admin
                      </button>}
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn bg-purple-300"
                    >
                      <FaTrashAlt className="text-purple-500"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default ManageUsers;