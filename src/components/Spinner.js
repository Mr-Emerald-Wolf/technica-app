import React from 'react'
import loading from '../loading.svg'

const Spinner = () => {

    return (
        <div className="flex justify-center">
            <img src={loading} alt="" />
        </div>
    )

}
export default Spinner