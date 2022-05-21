import React from 'react';

export default function Landing() {
   
    return (
        <>
            <section className="flex h-screen flex-col items-center px-6 lg:px-32 bg-orange-50 dark:bg-black justify-center ">
                <main id='landing' className="w-full md:w-9/12 xl:w-8/12">

                    <h1 className="text-4xl md:text-6xl lg:text-9xl md:p-3 font-kalam font-bold dark:text-slate-300 text-lime-800 text-center">
                        MedTrack
                    </h1>
                    <p className="font-bold mb-1 lg:text-4xl text-center text-lime-600 dark:text-slate-400">Insert Tagline Here</p>

                </main>

                
            </section>
          
        </>
    );
}
