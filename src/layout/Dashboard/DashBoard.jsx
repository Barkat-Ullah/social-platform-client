import { FaAd, FaBook, FaHome, FaPodcast, FaUsers, FaVoicemail } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {

    const isAdmin = false;

    return (
        <div className="flex max-w-6xl mx-auto my-1">
        <div className="w-64 min-h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded">
          <ul className="menu p-8 text-white">
  
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/adminHome">
                    <FaHome></FaHome>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addAnnounce">
                    <FaPodcast></FaPodcast>
                    Add Announcement
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/manageItems">
                    <FaList></FaList>
                    Manage Items
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/dashboard/report">
                    <FaBook></FaBook>
                    Reported Activities
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users">
                    <FaUsers></FaUsers>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/userHome">
                    <FaHome></FaHome>
                    My Profile
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/paymentHistory">
                    <FaCalendar></FaCalendar>
                    Reservation
                  </NavLink>
                </li> */}
                <li>
                  <NavLink to="/dashboard/post">
                    <FaPodcast></FaPodcast>
                    My Post 
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addPost">
                    <FaAd></FaAd>
                    Add a post
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/dashboard/bookings">
                    <FaList></FaList>
                    My Bookings
                  </NavLink>
                </li> */}
              </>
            )}
  
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/order/salad">
                <FaSearch></FaSearch>
                Menu
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/order/contact">
                <FaVoicemail></FaVoicemail>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 my-2">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default DashBoard;