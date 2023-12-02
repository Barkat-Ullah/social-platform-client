// import React from 'react';

import { FaTrashAlt } from "react-icons/fa";
import useReport from "../../hooks/useReport";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Report = () => {
  const [reports, refetch] = useReport();
  const axiosSecure = useAxiosSecure()
  
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
          axiosSecure.delete(`/reports/${user._id}`).then((res) => {
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
        <h2 className="text-3xl">All Reports</h2>
        <h2 className="text-3xl">Total reports {reports.length}</h2>
      </div>
      <div className="overflow-x-auto mx-3">
        <table className="table">
          <thead className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-lg">
            <tr className="text-white">
              <th>#</th>
              <th>User Mail</th>
              <th>Report User Email</th>
              <th>Reported Comments</th>
              <th>Report</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>

                <td className="text-purple-500">{user.userEmail}</td>
                <td>{user.postEmail}</td>
                <td>{user.reportComments}</td>
                <td>{user.report}</td>

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

export default Report;
