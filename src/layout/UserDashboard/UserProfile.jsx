import useAuth from "../../hooks/useAuth";
import usePayments from "../../hooks/usePayments";
import svg1 from "../../assets/badge-medal-svgrepo-com.svg";
import svg2 from "../../assets/medal-silver-badge-svgrepo-com.svg";

const UserProfile = () => {
  const { user } = useAuth();
  const userMail = user?.email;
  console.log(userMail);
  const [payments] = usePayments();

  const paymentEmail = payments && payments.length > 0 ? payments[0].email : null;

  console.log(paymentEmail);

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


      {userMail && paymentEmail ? (
        <>
          <div className="flex justify-center items-center mt-5">
            <img
              className="h-32 w-32 "
              src={svg1}
              alt=""
            />
            <h2 className="text-3xl font-bold">------>You earn gold Badges</h2>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center mt-5 ">
            <img
              className="h-32 w-32 "
              src={svg2}
              alt=""
            />
             <h2 className="text-3xl font-bold">------>You earn silver Badges</h2>
          </div>
        </>
      )}



    </div>
  );
};

export default UserProfile;
