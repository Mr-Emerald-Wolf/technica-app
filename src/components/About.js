import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <>
                <section className="dark:bg-slate-800 min-h-screen p-2 bg-orange-50">



                    <div className="bg-orange-100 dark:bg-gray-900 p-6 mt-6 m-4 rounded shadow-md ">
                        <h1 className="text-4xl md:text-6xl lg:text-9xl p-3 font-kalam font-bold dark:text-white text-lime-1000">
                            About Us
                        </h1>
                        <div className="px-6">

                            <p className="mt-1 dark:text-sky-200 text-lime-700 md:text-xl">
                                Going into an e-commerce website and spending hours upon hours comparing multiple different products, their prices, specifications etc... is an arduous cycle of hesitation and deliberation which we are all too familiar with. With Comparo say good-bye to this hassle forever ! Comparo allows you to select multiple items from every different e-commerce site, be it Amazon or Flipkart and provides you with a simple UI where you can compare all the different items in 1 place. As students, we may not be able to make an impact on a large enough scale but we hoped to make the road easier for others. And that is what Comparo aims to do.
                            </p>
                        </div>


                    </div>


               

                    <div className="bg-orange-100 dark:bg-gray-900 p-6 mt-6 m-4 rounded shadow-md ">

                        <div className="px-6 mt-2">
                            <h2 className="title-font text-4xl font-semibold text-lime-1000 dark:text-white tracking-widest md:text-5xl">
                                Team Members
                            </h2>
                            <p className="dark:text-sky-200 text-lime-700 leading-relaxed md:text-xl">
                            Shivam Sharma - Leader, Front End {"&"} UI Designer <br />Achintya Gupta - Product Manager  <br /> Devansh Kuldeep Mishra - Content Writer <br />Siddharth Dave - Backend {"&"} API Developer <br /> 
                            </p>

                        </div>

                    </div>


             
                </section>
            </>
        )
    }
}

export default About