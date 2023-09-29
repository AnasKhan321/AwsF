import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Services = () => {
    const [data, setdata] = useState([])
    const fetchData = () => {
        const res = fetch('http://localhost:3000/allservices').then((res) => res.json()).then((data) => setdata(data.data))
    }
    useEffect(() => {
        fetchData();

    }, [])
    const handleClick = (id , price , title) =>{
        console.log(id,price,title)
        localStorage.setItem(id , JSON.stringify({title : title , price : price}))
        toast('Successfully added in the cart ')
    }

    return (
        <div className="cards w-8/12 mx-auto  min-h-screen">
            <ToastContainer />

            {data.map((e) => {
                return (
                    <div className="card shadow-lg p-4 flex justify-center flex-col items-center my-4 border   ">
                        <h2 className="text-2xl font-bold  my-2  ">{e.title} </h2>
                        <p className="text-xl  my-2 ">{e.desc}</p>
                        <p className="text-xl text-green-500 my-2  " >${e.price} </p>
                        <button className="text-white bg-sky-800 px-4 py-2 " onClick={()=>{ handleClick(e._id , e.price, e.title) }}  >Add to Cart </button>
                    </div>
                )
            })}
        </div>
    )
}

export default Services