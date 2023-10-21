import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import AddProduct from "../AddProduct/AddProduct";
import Login from "../Login/Login";
import Register from "../register/Register";
import PrivateRoute from "../PrivateRouter/PrivateRouter";
import Details from "../Details/Details";
import UpdateProduct from "../AddProduct/UpdateProduct";
import BRand from "../AddProduct/BRand";
   
 
const  myCratedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error/>,
        children: [
            {

                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/brands')
            },
            {
                path: '/addProduct',
                element:<PrivateRoute> <AddProduct></AddProduct></PrivateRoute>
            },
            
          
            {
                path: '/details/brandsCard',
                element: <BRand></BRand>,
                loader: ()=> fetch('http://localhost:5173/brandsCard')
            },
            {
                path: '/details',
                element :  <Details></Details>,
                loader: ()=> fetch(`http://localhost:5000/addProduct`),
              
                 
            },
           
            {
             path: '/details/updateProduct/:id',
             element:<PrivateRoute> <UpdateProduct></UpdateProduct></PrivateRoute>,
             loader: ({params})=> fetch(`http://localhost:5000/addProduct/${params.id}`)
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