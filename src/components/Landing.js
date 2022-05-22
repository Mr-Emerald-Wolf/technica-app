import React from 'react';
import { Link } from "react-router-dom";


export default function Landing() {
    // const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    // console.log(isDarkMode);
   
    return (
        <>
            <section className="flex h-screen flex-col items-center px-6 lg:px-32 bg-orange-50 dark:bg-[#10332d] justify-center ">
                <main id='landing' className="w-full md:w-9/12 xl:w-8/12">
                    <div className="flex justify-center">
                        <img className='w-1/2 -mb-6  dark:hidden' src="./assets/logo_light.png" alt="Logo" />
                        {<img className='w-1/2 -mb-6  hidden dark:block' src="./assets/logo_dark.png" alt="Logo" />}
                    </div>
                    <h1 className="text-6xl md:text-6xl lg:text-9xl -mt-6 md:p-3 font-kalam font-bold dark:text-[#c3c3ae] text-lime-800 text-center">
                        MedTrack
                    </h1>
                    <p className="mb-4 text-2xl lg:text-3xl font-bold text-center text-lime-600 dark:text-[#8eca60] ">YOUR WELLBEING PARTNER</p>
                
                </main>
                <Link to="/prescription" className="bg-orange-100 dark:bg-[#264d48] md:p-3 md:m-4 m-2 p-2 shadow rounded-md text-xl text-lime-600 dark:text-[#8eca60] ">My Prescriptions</Link>
                
            </section>
          
        </>
    );
}
