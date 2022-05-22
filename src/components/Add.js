import React from 'react'

export default function Add() {
    return (
        <>
            <section className="dark:bg-[#10332d] min-h-screen bg-orange-50 p-2 flex justify-center">



                <div className="bg-orange-100 dark:bg-[#264d48] p-4 mt-6 m-2 rounded shadow-md ">
                    <h1 className="text-2xl md:text-4xl lg:text-6xl p-3 font-kalam font-bold dark:text-[#aeae9a] text-lime-1000">
                        Add Prescription
                    </h1>
                    <div className="px-6 py-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                            Date Issued
                        </h2>
                        <input
                            type="date"
                            class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                            id="exampleText0"
                            placeholder="Date"
                        />

                    </div>
                    <div className="px-6 py-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                            Doctor Name
                        </h2>
                        <input
                            type="text"
                            class="
                                form-control
                                block
                                w-full
                                px-3
                                py-1.5
                                text-base
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                            id="exampleText0"
                            placeholder="Name"
                        />

                    </div>
                    <div className="px-6">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                            MEDICINE
                        </h2>
                        <div className="">


                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="4"
                                placeholder="Medicine 1, Medicine 2"
                            ></textarea>

                        </div>
                    </div>

                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                            Dosage
                        </h2>
                        <div className="">


                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="Dosage 1, Dosage 2"
                            ></textarea>

                        </div>

                    </div>
                    <div className="px-6 mt-4">
                        <h2 className="title-font font-semibold text-lime-900 dark:text-white tracking-widest md:text-2xl">
                            Duration
                        </h2>
                        <div className="">


                            <textarea
                                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleFormControlTextarea1"
                                rows="2"
                                placeholder="Duration 1, Duration 2"
                            ></textarea>

                        </div>

                    </div>
                    <div className="flex justify-center">
                        <button className="bg-yellow-50 dark:bg-[#10332d] md:p-3 md:m-4 m-2 p-3 shadow rounded-md text-xl text-lime-600 dark:text-[#8eca60]">Add Prescription</button>
                    </div>
                </div>


            </section>
        </>
    )
}
