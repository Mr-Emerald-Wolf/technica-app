import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <>
                <section className="dark:bg-[#10332d] min-h-screen p-2 bg-orange-50">



                    <div className="bg-orange-100 dark:bg-[#264d48] p-6 mt-6 m-4 rounded shadow-md ">
                        <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-[#c3c3ae] text-lime-1000">
                            About Us
                        </h1>
                        <div className="px-6">

                            <p className="mt-1 dark:text-[#96b565] text-lime-700 md:text-xl">
                                At MedTrack, our core values are centred around your wellbeing. We are a team of highly motivated individuals solely focused on our goal of making life easier for people with medical conditions by helping them keep track of their drug prescriptions, with reminders to take medicines on time. With consultation from medical experts, MedTrack will inform you about any side effects that the drugs may cause, and lets you take precautionary measures. MedTrack will remind you to take regular health check-ups, ensuring that your road to recovery is smooth-sailing.  
                            </p>
                        </div>


                    </div>


               

                    <div className="bg-orange-100 dark:bg-[#264d48] p-6 mt-6 m-4 rounded shadow-md ">

                        <div className="px-6">
                            <h2 className="title-font text-4xl font-semibold text-lime-1000 dark:text-[#c3c3ae] tracking-widest md:text-5xl">
                                Team Members
                            </h2>
                            <p className="dark:text-[#96b565] text-lime-700 leading-relaxed md:text-xl mt-4">
                            Shivam Sharma - Leader, Front End {"&"} UI Designer <br />Achintya Gupta - Product Manager  {"&"} Marketing Lead <br /> Devansh Kuldeep Mishra - Content Writer <br />Siddharth Dave - Backend {"&"} API Developer <br /> 
                            </p>

                        </div>

                    </div>


             
                </section>
            </>
        )
    }
}

export default About