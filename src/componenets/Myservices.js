import React ,{useEffect , useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Myservices = () => {
    const [data, setdata] = useState([])
    const fetchDAta = async()=>{
        const res =  await fetch(`http://localhost:3000/mycourse/${localStorage.getItem('tokenn')}`); 
        const data1 = await res.json(); 
        console.log(data1)
        setdata(data1.data)
    }
    useEffect(()=>{
        fetchDAta()
    },[])
  return (
    <div className="cards w-8/12 mx-auto min-h-screen ">
            <ToastContainer />

    {data.map((e) => {
        return (
            <div className="card shadow-lg p-4 flex justify-center flex-col items-center my-4 border   ">
                <h2 className="text-2xl font-bold  my-2  ">{e.title} </h2>
                <p className="text-xl  my-2 ">{e.desc}</p>
            </div>
        )
    })}

    {data.length == 0 && <div className="font-bold text-2xl text-center "> You haven't purchased any services </div>}
</div>
  )
}

export default Myservices