import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/Authprovider";

 
const Navbar = () => {
  const [fix, setFix] = useState(null);
  const { user, logOut } = useContext(AuthContext);
  
    useEffect(() => {
      window.addEventListener("scroll", stickNavbar);
      return () => {
        window.removeEventListener("scroll", stickNavbar);
      };
    }, []);
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHe = window.scrollY;
        windowHe > 200 ? setFix("fixed top-0 left-0 z-50") : setFix("relative");
      }
    };
    const navlinks = (
        <>
         <li>
        <NavLink
          to="/ "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "bg-blue-500  rounded-md font-semibold border" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-500  rounded-md font-semibold   border" : ""
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/login "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-500  font-semibold rounded-md    border" : ""
          }
        >
          Login
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register "
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " bg-blue-500  font-semibold rounded-md    border" : ""
          }
        >
          Register
        </NavLink>
      </li>
        </>
    )
    return (
        <div className={`h-16  w-full bg-gray-200 ${fix}`}>

        <div className="navbar bg-blue-400 ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="  menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52">
     {navlinks}
      </ul>
    </div>
<div className="flex items-center justify-center">
<img src="/public/car-logo-removebg-preview.png" className="w-24 h-[50px]" alt="" />
<a className="  normal-case text-3xl font-bold text-white">Car Next</a>

</div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-white menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  {user?.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt={user.displayName} />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <button className="btn btn-sm  btn-ghost">
                      {user.displayName}
                    </button>
                  </li>
                  <li>
                    <button className="btn btn-sm  btn-ghost" onClick={logOut}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-sm  btn-ghost">Login</button>
              </Link>
            )}
  </div>
</div>
</div>

    );
};

export default Navbar;