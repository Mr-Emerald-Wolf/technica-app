import React from 'react'
import addNotification from 'react-push-notification';
function Item(props) {

    function setNotification (){
        addNotification({
          title: 'Success',
          subtitle: 'Reminder Set',
          message: 'Will Send Reminder for Prescription',
          theme: 'light',
          closeButton:"X",
          backgroundTop:"green",
          backgroundBottom:"yellowgreen"
        })
      };
    
    function successNotification() {
        
        addNotification({
            title: 'Medicine Reminder',
            message: `After Food take ${props.data.medicine[0]} and ${props.data.medicine[1]}`,
            native: true
            
        })
    };
    function sendNotification() {

        setNotification();
        setTimeout(() => { successNotification() }, 5000);
    }

    console.log(props.data.medicine.length);


    return (
        <>
            <div className="m-2 p-2 bg-amber-50 dark:bg-[#10332d] rounded shadow">
                <p className='text-lime-800 dark:text-[#9ee16b]'>Date Issued: {props.data.date}</p>
                <table className="table-auto">
                    <thead>
                        <tr>
                            <th className='text-lime-700 dark:text-[#9ee16b]'>Medicine Name</th>
                            <th className='text-lime-700 dark:text-[#9ee16b]'>Dosage</th>
                            <th className='text-lime-700 dark:text-[#9ee16b]'>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.medicine.map((value, index) => {
                            return (
                                <>
                                    <tr>
                                        <td className="md:m-2 md:p-1 text-lime-800 dark:text-[#8eca60]">{value}</td>
                                        <td className="md:m-2 md:p-1 text-lime-800  dark:text-[#8eca60]">{props.data.dosage[index]}</td>
                                        <td className="md:m-2 md:p-1 text-lime-800 dark:text-[#8eca60]">{props.data.duration[index]}</td>
                                    </tr>

                                </>
                            )
                        })}


                    </tbody>
                </table>
                <p className='mt-1 dark:text-[#9ee16b] text-lime-700 md:text-xl font-bold'>Doctor: {props.data.doctor}</p>
                <button onClick={sendNotification} className="bg-orange-100 dark:bg-[#264d48]  m-2 p-2 shadow rounded-md  text-lime-600 dark:text-[#8eca60] ">Send Notifications</button>
            </div>
        </>
    )
}

export default Item