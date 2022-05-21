import React from 'react'
import Item from './Item'

export default function Prescription() {
  return (
    <>
     <section className="dark:bg-[#10332d] min-h-screen p-2 bg-orange-50">



<div className="bg-orange-100 dark:bg-[#264d48] p-6 mt-6 m-4 rounded shadow-md ">
    <h1 className="text-xl md:text-3xl lg:text-6xl p-3 font-kalam font-bold dark:text-[#c3c3ae] text-lime-1000">
        My Prescriptions
    </h1>
    <div className="grid grid-flow-row md:grid-flow-col">
        <Item/>
        <Item/>
        <Item/>
    </div>


</div>


</section>
    </>
  )
}
