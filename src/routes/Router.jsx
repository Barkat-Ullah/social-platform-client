import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Members from "../Members/Members";
import DashBoard from "../layout/Dashboard/DashBoard";
import UserProfile from "../layout/UserDashboard/UserProfile";
import AddPost from "../layout/UserDashboard/AddPost";
import ManageUsers from "../layout/AdminDashboard/ManageUsers";
import AdminHome from "../layout/AdminDashboard/AdminHome";
import AddAnnounce from "../layout/AdminDashboard/AddAnnounce";
import Notify from "../shared/Notify/Notify";
import ErrorPage from "../shared/Error/ErrorPage";
import PostDetails from "../pages/Posts/PostDetails";
import MyPost from "../layout/UserDashboard/MyPost";
import Payment from "../Members/Payment";
import AllComments from "../shared/Comments/AllComments";
import Report from "../layout/AdminDashboard/Report";
import PrivateRoute from "./PrivateRoute";
import AdminPrivate from "./AdminPrivate";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        errorElement:<ErrorPage/> ,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"members",
                element:<PrivateRoute><Members></Members></PrivateRoute>
            },
            {
                path:"icon",
                element:<Notify></Notify>
            },
            {
                path:"post/:id",
                element:<PrivateRoute><PostDetails></PostDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/posts/${params.id}`)

            },
            {
                path:"payments",
                element:<PrivateRoute><Payment></Payment></PrivateRoute>
            },
            {
                path: "/comments/:postId",
                element:<AllComments></AllComments>
            },
        ]
    },
    {
        path: '/login',
        element:<Login></Login>
    },
   
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:"/dashboard",
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children:[
            {
                path:"userHome",
                element:<UserProfile></UserProfile>
            },
            {
                path:"addPost",
                element:<AddPost></AddPost>
            },
            {
                path:"post",
                element:<MyPost></MyPost>
            },
           
            // admin route
            {
                path:"adminHome",
                element:<AdminPrivate><AdminHome></AdminHome></AdminPrivate>
            },
            {
                path:"addAnnounce",
                element:<AdminPrivate><AddAnnounce></AddAnnounce></AdminPrivate>,
            },
            {
                path:"report", 
                element:<PrivateRoute><Report></Report></PrivateRoute>
            },
            {
                path:"users",
                element:<AdminPrivate><ManageUsers></ManageUsers></AdminPrivate>
            }
        ]
    }
])

export default router;