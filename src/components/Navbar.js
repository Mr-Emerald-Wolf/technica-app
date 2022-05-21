import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./LogoutButton";



export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const { user, isAuthenticated, isLoading} = useAuth0();
    const { logout } = useAuth0();
    console.log(user);
   

    return (
        <>
            <header className="bg-orange-100 dark:bg-[#264d48] md:p-1 z-20 top-0 md:sticky">
                <div className="container flex justify-between mx-auto">
                    <Link to="/" aria-label="Back to homepage" className="flex items-center p-2 md:p-1 font-Rosarivo text-2xl dark:text-[#c3c3ae] text-lime-800">
                        MedTrack
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                           {isLoading && <p className="flex items-center px-4 -mb-1 hover:text-lime-600 dark:text-[#96b565]  dark:border-transparent text-lime-800">Loading..</p>}
                           { !isAuthenticated && <LoginButton/>}
                           {!isLoading && isAuthenticated && <Link to="/user" className="flex items-center px-4 -mb-1 hover:text-lime-600 dark:text-[#96b565]  dark:border-transparent text-lime-800">Welcome {user.given_name}</Link>}
                        </li>
                        <li className="flex">
                            <Link to="/help" className="flex items-center px-4 -mb-1 dark:text-[#96b565] hover:text-lime-600  dark:border-transparent text-lime-800">Help</Link>
                        </li>
                        <li className="flex">
                            <Link to="/about" className="flex items-center px-4 -mb-1 dark:text-[#96b565] hover:text-lime-600  dark:border-transparent text-lime-800">About</Link>
                        </li>
                        <li className="flex">
                            <Link to="/contact" className="flex items-center px-4 -mb-1 dark:text-[#96b565] hover:text-lime-600  dark:border-transparent text-lime-800">Contact</Link>
                        </li>
                        <li className="flex">
                            {isAuthenticated && <LogoutButton/>}
                        </li>
                    </ul>


                    <button className="flex justify-end p-4 md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                    {!isAuthenticated && <LoginButton/>}
                    {isAuthenticated && <Link to="/user" className="flex items-center px-4 -mb-1 hover:text-lime-600  dark:border-transparent text-lime-800 text-sm dark:text-lime-600 ">Welcome {user.given_name}</Link>}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>


                <div className="md:hidden">
                    <ul className={(navbarOpen ? "grid grid-cols-1" : "hidden")}>
                        <li className=" text-lime-600 text-sm p-4 bg-amber-50 hover:bg-orange-100 transition dark:bg-[#10332d]  dark:hover:bg-slate-900  duration-300"><Link to="/help" >Help</Link></li>
                        <li className=" text-lime-600 text-sm p-4 bg-orange-50 hover:bg-orange-100 transition dark:bg-[#264d48] dark:hover:bg-slate-900 duration-300"><Link to="/about" >About</Link></li>
                        <li  className=" text-lime-600 text-sm  p-4 bg-amber-50 hover:bg-orange-100 transition dark:bg-[#10332d]  dark:hover:bg-slate-900 duration-300"><Link to="/contact">Contact</Link></li>
                        {isAuthenticated && <li className=" text-lime-600 text-sm p-4 bg-amber-50 hover:bg-orange-100 transition dark:bg-[#264d48] dark:hover:bg-slate-900 duration-300" onClick={logout}>Log Out</li>}
                    </ul>
                </div>
            </header>
        </>
    );
}
