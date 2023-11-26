import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { user } = useAuth();
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center text-center w-56 mt-6 -mx-2 bg-gradient-to-r p-10 rounded from-indigo-100 via-purple-100 to-pink-100">
        <img
          className="object-cover w-30 h-30 mx-2 rounded-full"
          src={user.photoURL}
          alt="avatar"
        />
        <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
          {user.displayName}
        </h4>
        <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
