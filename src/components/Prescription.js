import React from 'react'
import Item from './Item'
import { prescription } from "../data";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from './Spinner';


export default function Prescription() {
  const {loginWithRedirect, isAuthenticated} = useAuth0();
  if (!isAuthenticated){
    loginWithRedirect();
  }
  //console.log(prescription);
  return (
    <>
      {!isAuthenticated && (<div className='dark:bg-[#10332d] bg-orange-50 min-h-screen'><Spinner/></div>)}
      {isAuthenticated && (<section className="dark:bg-[#10332d] min-h-screen p-2 bg-orange-50">

        <div className="bg-orange-100 dark:bg-[#264d48] p-6 mt-6 m-4 rounded shadow-md ">
          <h1 className="text-3xl md:text-4xl lg:text-6xl p-3 font-kalam font-bold dark:text-[#c3c3ae] text-lime-1000">
            My Prescriptions
          </h1>


          <div className="grid grid-flow-row md:grid-flow-col">
            {prescription.map((data) => (
              <Item key={data.date} data={data} />
            ))}
          </div>

          <div class='flex items-center justify-center'>
            <Link to="/add" className="bg-yellow-50 dark:bg-[#10332d] md:p-3 md:m-4 m-2 p-3 shadow rounded-md text-xl text-lime-600 dark:text-[#8eca60] ">Add Prescription</Link>
          </div>

        </div>


      </section>)}
    </>
  )
}
