import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import MainLayout from "../Layout/MainLayout";
import Error from "../Error/Error";
import AddProduct from "../AddProduct/AddProduct";
import Login from "../Login/Login";
import Register from "../register/Register";
 import PrivateRoute from "../PrivateRouter/PrivateRouter";
 import UpdateProduct from "../AddProduct/UpdateProduct";
import MyCart from "../MyCart/MyCart";
import BRand from "../AddProduct/BRand";
import MoreDetails from "../AddProduct/MoreDetails";
 
const myCratedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error />,
    children: [
      { 
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://brand-shop-server-alpha-eight.vercel.app/brands"),
      },
      {
        path: "/brandsCard",
        element: (
          <PrivateRoute>
            {" "}
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      

      {
        path: "/brandsCard/:brand",
        element: <BRand></BRand>,
        loader: ({params}) =>
          fetch(`https://brand-shop-server-alpha-eight.vercel.app/brandsCard/${params.brand}`),
      },
      

      {
        path: "/details/:id",
        element: <PrivateRoute><MoreDetails></MoreDetails></PrivateRoute>,
        loader: ({params}) => fetch(`https://brand-shop-server-alpha-eight.vercel.app/${params.id}`)
      },

      {
        path: "/updateProduct/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateProduct></UpdateProduct>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://brand-shop-server-alpha-eight.vercel.app/brandsCard/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default myCratedRoute;
