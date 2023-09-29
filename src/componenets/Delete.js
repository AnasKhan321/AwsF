import React ,{useState,useEffect} from 'react'
import  {Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Delete = () => {
    const [data, setdata] = useState([])
    const fetchData = () => {
        const res = fetch('http://localhost:3000/allservices').then((res) => res.json()).then((data) => setdata(data.data))
    }
    useEffect(() => {
        fetchData();

    }, [])
    const handleClick = async(id) =>{
        const res = await fetch(`http://localhost:3000/delete/${id}`); 
        const data = await res.json(); 
        console.log(data)
        if(data.success){
            toast('Delted Successfully ')
        }

    }

    return (
        <div className="cards w-8/12 mx-auto min-h-screen ">
            <ToastContainer />

            {data.map((e) => {
                return (
                    <div className="card shadow-lg p-4 flex justify-center flex-col items-center my-4 border   ">
                        <h2 className="text-2xl font-bold  my-2  ">{e.title} </h2>
                        <p className="text-xl  my-2 ">{e.desc}</p>
                        <p className="text-xl text-green-500 my-2  " >${e.price} </p>
                        <button className="text-white bg-sky-800 px-4 py-2 " onClick={()=>{ handleClick(e._id ) }}  >Delete Service </button>

                        <Link className="text-white bg-sky-800 px-4 py-2  my-2 "  to={`/update?q=${e._id}`}> Update Service </Link>

                    </div>
                )
            })}
        </div>
    )
}

export default Delete