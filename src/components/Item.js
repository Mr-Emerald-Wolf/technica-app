import React from 'react'

export default function Item() {
    return (
        <>
            <div className="m-2 p-2 bg-amber-50 rounded shadow">
                <p>Date Issued: </p>
                <table class="table-auto">
                    <thead>
                        <tr>
                            <th>Medicine Name</th>
                            <th>Dosage</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dolo 650mg</td>
                            <td>1 Morning 1 Night</td>
                            <td>3 Days</td>
                        </tr>
                        <tr>
                            <td>Paracetamol</td>
                            <td>1 Morning</td>
                            <td>2 Days</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </>
    )
}
