import React from "react";
import { Link } from "react-router-dom";



export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <header className="bg-orange-50 dark:bg-slate-900 dark:text-sky-100 p-1 z-20 top-0 md:sticky">
                <div className="container flex justify-between mx-auto">
                    <Link to="/" aria-label="Back to homepage" className="flex items-center p-1 font-Rosarivo text-2xl text-lime-800">
                        MedTrack
                    </Link>
                    <ul className="items-stretch hidden space-x-3 md:flex">
                        <li className="flex">
                            <p className="flex items-center px-4 -mb-1  dark:border-transparent text-lime-800">Welcome User</p>
                        </li>
                        <li className="flex">
                            <Link to="/help" className="flex items-center px-4 -mb-1 hover:text-sky-800  dark:border-transparent text-lime-800">Help</Link>
                        </li>
                        <li className="flex">
                            <Link to="/about" className="flex items-center px-4 -mb-1 hover:text-sky-800  dark:border-transparent text-lime-800">About</Link>
                        </li>
                        <li className="flex">
                            <Link to="/contact" className="flex items-center px-4 -mb-1 hover:text-sky-800  dark:border-transparent text-lime-800">Contact</Link>
                        </li>
                    </ul>

                   
                    <button className="flex justify-end p-4 md:hidden" onClick={() => setNavbarOpen(!navbarOpen)}>
                    <p className="px-4" >Welcome User</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>


                <div className="md:hidden">
                    <ul className={(navbarOpen ? "" : "hidden")}>
                        <li><Link to="/help" className="block text-sm px-2 py-4 bg-sky-100 hover:bg-slate-100 transition dark:bg-[#01182e] dark:hover:bg-slate-900  duration-300">Help</Link></li>
                        <li><Link to="/about" className="block text-sm px-2 py-4 bg-white hover:bg-slate-100 transition dark:bg-[#001529] dark:hover:bg-slate-900 duration-300">About</Link></li>
                        <li><Link to="/contact" className="block text-sm px-2 py-4 bg-sky-100 hover:bg-slate-100 transition dark:bg-[#01182e] dark:hover:bg-slate-900 duration-300">Contact</Link></li>
                    </ul>
                </div>
            </header>
        </>
    );
}
