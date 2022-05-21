import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
    const { user } = useAuth0();

    return (
        <>
            <section className="dark:bg-[#10332d] bg-orange-50 min-h-screen p-2">



                <div className="bg-orange-100 dark:bg-[#264d48] m-6 p-4 rounded shadow-md ">
                    <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-[#aeae9a] text-lime-1000">
                        My Profile
                    </h1>
                    <div className="px-6">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            Email
                        </h2>
                        <p className="mt-1 dark:text-[#96b565] text-lime-700 md:text-xl">
                            {user.email}
                        </p>
                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            Age
                        </h2>
                        <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl">
                            19

                        </p>

                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            Doctor Name
                        </h2>
                        <a className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl" href="https://www.instagram.com/comparo.ecommerce/">
                            Dr.Strange
                        </a>

                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            Blood Group
                        </h2>
                        <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl" >
                            O+
                        </p>

                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            Allergies
                        </h2>
                        <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl" >
                            None
                        </p>

                    </div>
                </div>


            </section>
        </>
    )
}
