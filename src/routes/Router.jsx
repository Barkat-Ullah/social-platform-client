import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../shared/Login/Login";
import Register from "../shared/Register/Register";
import Members from "../Members/Members";
import DashBoard from "../layout/Dashboard/DashBoard";
import UserProfile from "../layout/UserDashboard/UserProfile";
import AddPost from "../layout/UserDashboard/AddPost";

const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"members",
                element:<Members></Members>
            }
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
        element: <DashBoard></DashBoard>,
        children:[
            {
                path:"userHome",
                element:<UserProfile></UserProfile>
            },
            {
                path:"post",
                element:<AddPost></AddPost>
            }
        ]
    }
])

export default router;