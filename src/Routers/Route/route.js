import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import NotFound from "../../Pages/Others/NotFound/NotFound";
import Subscription from '../../Pages/Components/Subscription/Subscription'
import HomeLayout from "../../Pages/Components/Home/HomeLayout";
import Events from "../../Pages/Components/Events/Events";
import Admin from "../../Pages/Components/Admin/Admin";
import DashboardLayout from "../../Layout/DashboardLayout";
import Subscriber from "../../Pages/Dashboard/DashboardBody/Subscriber/Subscriber";
import AddMusic from "../../Pages/Dashboard/DashboardBody/AddMusic/AddMusic";
import AddEvents from "../../Pages/Dashboard/DashboardBody/AddEvents/AddEvents";
import Login from "../../Pages/Components/Login/Login";
import Register from "../../Pages/Components/Register/Register";
import UpdateMusic from "../../Pages/Dashboard/DashboardBody/AddMusic/SongContentList/SongContentListTable/UpdateMusic/UpdateMusic";
import SubscriptionAccess from "../../Pages/Components/Subscription/SubscriptionAccess/SubscriptionAccess";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <HomeLayout />
            },
            {
                path: '/subscription',
                element: <Subscription />
            },
            {
                path: '/events',
                element: <Events />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/admin',
                element: <Admin />
            },
            {
                path: '/subscription/access',
                element:
                    <PrivateRouter>
                        <SubscriptionAccess />
                    </PrivateRouter>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: 'dashboard',
                element: <Subscriber />
            },
            {
                path: 'add-event',
                element: <AddEvents />
            },
            {
                path: 'add-songs',
                element: <AddMusic />,
            },
            {
                path: 'add-songs/update/:id',
                element: <UpdateMusic />,
                loader: async ({ params }) => fetch(`https://play-beat-server.vercel.app/musics/${params.id}`)
            }
        ]
    }
])

export default router