import React, { useState,useEffect } from 'react'
import axios from 'axios'

function Demo2() {
    
    const [state, setState] = useState([]);

    const getData = async () => {
        try {
            console.log(state)
           const response=await axios.get('http://localhost:5000/doctor/getall')
            console.log(response)
            console.log(response.data)
            setState(
            response.data
            )
            console.log(state)
        } catch (error) {
            console.log('error')
        }
    }
    // useEffect(() => {
    //    getData();
    //   });

    return (
        <div>
            <h1>Raskonda shivam</h1>
            <button onClick={getData}> xyz</button>
            {state && state !== null ? 
            state.map(a=> <h1 key={a._id}>{a.name}</h1>)
            
            : ''}
        </div>
    )
}

export default Demo2;
