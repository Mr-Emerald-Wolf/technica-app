import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <>
                <section className="dark:bg-[#10332d] min-h-screen bg-orange-50 p-2">
                    


                        <div className="bg-orange-100 dark:bg-[#264d48] p-6 mt-6 m-4 rounded shadow-md ">
                            <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-[#aeae9a] text-lime-1000">
                                Contact Us
                            </h1>
                            <div className="px-6">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    ADDRESS
                                </h2>
                                <p className="mt-1 dark:text-[#96b565] text-lime-700 md:text-xl text-sm">
                                    India <br />
                                    Vellore
                                </p>
                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    EMAIL
                                </h2>
                                <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl text-sm">
                                    support@medtrack.com
                                </p>

                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    Instagram
                                </h2>
                                <a className="dark:text-[#96b565] text-sm text-lime-700 leading-relaxed md:text-xl" href="https://www.instagram.com/">
                                    medtrack_official
                                </a>

                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                                    Telephone
                                </h2>
                                <p className="dark:text-[#96b565] text-sm text-lime-700 leading-relaxed md:text-xl" >
                                    8764564323
                                </p>

                            </div>
                        </div>

                  
                </section>
            </>
        )
    }
}

export default Contact