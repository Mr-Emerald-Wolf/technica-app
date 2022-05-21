import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export default function User() {
    
    
    return (
        <>
            <section className="dark:bg-[#10332d] bg-orange-50 min-h-screen p-2">



                <div className="bg-orange-100 dark:bg-[#264d48] m-6 p-4 rounded shadow-md ">
                    <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-[#aeae9a] text-lime-1000">
                        My Profile
                    </h1>
                    <div className="px-6">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            How to use Comparo ?
                        </h2>
                        <p className="mt-1 dark:text-[#96b565] text-lime-700 md:text-xl">
                            Search for the product of your choice and get results from major e-commerce sites selling similar products to get an idea of pricing and specification.
                        </p>
                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            Is our data accurate ?
                        </h2>
                        <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl">
                            Our data is very accurate since it combines data from major e-commerce sites who sell similar products and presents an optimal price and accurate specifications for the product.

                        </p>

                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            What is our subscription model ?
                        </h2>
                        <a className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl" href="https://www.instagram.com/comparo.ecommerce/">
                            20 free searches everyday, after that Rs.249 every month for unrestricted access.
                        </a>

                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                            How does it work ?
                        </h2>
                        <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl" >
                            Our developers have created an algorithm to collect the live data of products from e-commerce sites and put together data of the optimal price for your products and gives you the specification of similar products as well.
                        </p>

                    </div>
                </div>


            </section>
        </>
    )
}
