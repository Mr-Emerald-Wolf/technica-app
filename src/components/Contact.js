import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <>
                <section className="dark:bg-slate-800 min-h-screen bg-orange-50 p-2">
                    


                        <div className="bg-orange-100 dark:bg-gray-900 p-6 mt-6 m-4 rounded shadow-md ">
                            <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-white text-lime-1000">
                                Contact Us
                            </h1>
                            <div className="px-6">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    ADDRESS
                                </h2>
                                <p className="mt-1 dark:text-lime-200 text-lime-700 md:text-xl">
                                    India <br />
                                    Hyderabad
                                </p>
                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    EMAIL
                                </h2>
                                <p className="dark:text-lime-200 text-lime-700 leading-relaxed md:text-xl">
                                    comparocommerce@gmail.com
                                </p>

                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    Instagram
                                </h2>
                                <a className="dark:text-lime-200 text-lime-700 leading-relaxed md:text-xl" href="https://www.instagram.com/comparo.ecommerce/">
                                    comparo.commerce
                                </a>

                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    Telephone
                                </h2>
                                <p className="dark:text-lime-200 text-lime-700 leading-relaxed md:text-xl" >
                                    8555509495
                                </p>

                            </div>
                        </div>

                  
                </section>
            </>
        )
    }
}

export default Contact