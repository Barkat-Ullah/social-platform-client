/* eslint-disable react/no-unknown-property */
const SingleAnnouncement = ({ announcement }) => {
  console.log(announcement);
  return (
    <div className="w-full max-w-md px-8 py-4 mt-16 bg-gradient-to-r p-10  from-indigo-200 via-purple-200 to-pink-200 rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex justify-center -mt-16 md:justify-end">
        <img
          className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
          alt="Testimonial avatar"
          src={announcement?.userImage}
        />
      </div>

      <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
        {announcement?.announcementName}
      </h2>

      <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
        {announcement?.announcementDetails}
      </p>

      <div className="flex justify-end mt-4">
        <h2 className="text-lg  font-medium text-blue-400 dark:text-blue-300">
          Created by {announcement?.userName}
        </h2>
      </div>
    </div>
  );
};

export default SingleAnnouncement;
