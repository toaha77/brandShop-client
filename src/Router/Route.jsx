import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import AddProduct from "../AddProduct/AddProduct";
import Login from "../Login/Login";
import Register from "../register/Register";
import PrivateRoute from "../PrivateRouter/PrivateRouter";

 
const  myCratedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error/>,
        children: [
            {

                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            },
            {
                path: '/addProduct',
                element:<PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]

    }
    
])

export default myCratedRoute;