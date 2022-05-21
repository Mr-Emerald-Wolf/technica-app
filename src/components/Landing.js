import React from 'react';
import { Link } from "react-router-dom";


export default function Landing() {
   
    return (
        <>
            <section className="flex h-screen flex-col items-center px-6 lg:px-32 bg-orange-50 dark:bg-[#10332d] justify-center ">
                <main id='landing' className="w-full md:w-9/12 xl:w-8/12">

                    <h1 className="text-4xl md:text-6xl lg:text-9xl md:p-3 font-kalam font-bold dark:text-[#c3c3ae] text-lime-800 text-center">
                        MedTrack
                    </h1>
                    <p className="mb-4 lg:text-3xl font-bold text-center text-lime-600 dark:text-[#8eca60] ">YOUR WELLBEING PARTNER</p>
                
                </main>
                <Link to="/prescription" className="bg-orange-100 dark:bg-[#264d48] p-3 m-4 shadow rounded-md text-2xl text-lime-600 dark:text-[#8eca60] ">My Prescriptions</Link>
                
            </section>
          
        </>
    );
}
