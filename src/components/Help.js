import React, { Component } from 'react'

export class Help extends Component {
    render() {
        return (
            <>
                <section className="dark:bg-[#10332d] bg-orange-50 min-h-screen p-2">
                   


                        <div className="bg-orange-100 dark:bg-[#264d48] m-6 p-4 rounded shadow-md ">
                            <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-[#aeae9a] text-lime-1000">
                                FAQ
                            </h1>
                            <div className="px-6">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                                 What does MedTrack do? 
                                </h2>
                                <p className="mt-1 dark:text-[#96b565] text-lime-700 md:text-xl">
                                MedTrack helps you keep track of your drug prescriptions and reminds you to take them on time. MedTrack will identify if a certain drug can cause side-effects, and will remind you to take up health check-ups in order to keep side-effects at bay. 
  
                                </p>
                            </div>
                            <div className="px-6 mt-4">
                                <h2 className="title-font font-semibold text-lime-900 dark:text-[#aeae9a] tracking-widest md:text-2xl">
                                How does MedTrack work? 
                                </h2>
                                <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl">
                                If your doctor is already a partner of MedTrack, they can upload your prescription to our database, with which we can automatically send periodic notifications through e-mail to remind you to take the medicines. If not, you can easily upload the prescription by yourself using our highly interactive website. 

                                </p>

                            </div>
                            
                        </div>

                   
                </section>
            </>
        )
    }
}

export default Help