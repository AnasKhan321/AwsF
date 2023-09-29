import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import  {Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Uservices = () => {
    const [title, settitle] = useState('')
    const [desc, setdesc] = useState('')
    const [price, setprice] = useState('')
    const fetchData = async () => {
        let id = window.location.href.split('=')[1]
        const res = await fetch(`http://localhost:3000/byid/${id}`)
        const data = await res.json();
        console.log(data)
        settitle(data.data.title)
        setdesc(data.data.desc)
        setprice(data.data.price)
        console.log(data.title, data.desc, data.price)

    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleChange = (e) => {
        if (e.target.name == 'title') {
            settitle(e.target.value)
        }
        else if (e.target.name == 'desc') {
            setdesc(e.target.value)
        }
        else {
            setprice(e.target.value)
        }
    }

    const handleSumbit = async(e) => {
        e.preventDefault()
        let id = window.location.href.split('=')[1]
        const data = {
            price: price,
            title: title,
            desc: desc
        }

        let res = await fetch(`http://localhost:3000/upateservice/${id}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        let d = await res.json(); 
        console.log(d)
        if(d.success){
            toast('Updated successfully ')
        }
        console.log(price, title, desc)
    }
    return (
        <div>
            <ToastContainer />


            <form onSubmit={handleSumbit} className="flex justify-center flex-col items-center w-6/12 mx-auto  ">
                <div className="input-group flex justify-around items-center my-4  w-12/12   ">

                    <label htmlFor="title"  className="font-bold mx-4 text-xl  " >Title </label>
                    <input className="px-3 py-2 mx-2 border border-slate-500 " type="text" name="title" id="title" onChange={handleChange} value={title} />
                </div>

                <div className="input-group  flex justify-around items-center my-4 w-12/12 ">
                    <label htmlFor="desc"  className="font-bold mx-4 text-xl  " >Description</label>
                    <input  className="px-3 py-2 mx-2 border border-slate-500 " type="text" name="desc" id="desc" onChange={handleChange} value={desc} />
                </div>

                <div className="input-group flex justify-around items-center my-4 w-12/12  ">
                    <label htmlFor="price"  className="font-bold mx-4 text-xl  " >Price</label>
                    <input className="px-3 py-2 mx-2 border border-slate-500 "  value={price} type="text" name="price" id="price" onChange={handleChange} />
                </div>
                <button type="submit  " className="px-4 py-2 text-white bg-sky-800 ">Update </button>

            </form>

        </div>
    )
}

export default Uservices