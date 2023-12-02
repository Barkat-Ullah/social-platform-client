/* eslint-disable react/no-unknown-property */
import useAuth from "../../hooks/useAuth";
import useComments from "../../hooks/useComments";
import usePost from "../../hooks/usePost";
import useTotalUser from "../../hooks/useTotalUser";
import { MdLocalPostOffice } from "react-icons/md";

const AdminHome = () => {
  const [users] = useTotalUser();
  const [posts] = usePost();
  const { user } = useAuth();
  const [comments] = useComments();
  return (
    <div>
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center text-center w-56 mt-6 -mx-2 bg-gradient-to-r p-10 rounded from-indigo-100 via-purple-100 to-pink-100">
          <img
            className="object-cover w-30 h-30 mx-2 rounded-full"
            src={user?.photoURL}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
            {user?.displayName}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {user?.email}
          </p>
        </div>
      </div>
      <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-4">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Number of users, comments & posts.
              </h1>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <MdLocalPostOffice className="text-indigo-500 w-12 h-12 mb-3 inline-block"></MdLocalPostOffice>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {posts.length}
                  </h2>
                  <p className="leading-relaxed">Posts</p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {users.length}
                  </h2>
                  <p className="leading-relaxed">Users</p>
                </div>
              </div>
              <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <svg
                    className="text-indigo-500 w-12 h-12 mb-3 inline-block"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                  </svg>

                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {comments.length}
                  </h2>
                  <p className="leading-relaxed">Total Comments</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
