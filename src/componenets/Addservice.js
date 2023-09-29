import React ,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Addservice = () => {
    const [desc, setdesc] = useState('')
    const [title, settitle] = useState('')
    const [price, setprice] = useState('')

    const handleChange= (e)=>{
        if(e.target.name == 'title'){
            settitle(e.target.value)
        }
        else if(e.target.name == 'description'){
            setdesc(e.target.value)
        }
        else{
            setprice(e.target.value)
        }
    }

    const handleSumbit = async(e)=>{
        e.preventDefault(); 
        console.log(title,desc , price)
        const data = {
            title : title,
            desc : desc , 
            price : price
        }
        let res = await fetch('http://localhost:3000/addservice', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        let data2 = await res.json()
        console.log(data2)
        if(data2.success){
            toast.success('Your Service is added Successfully '); 
            
        }
    }
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer />

    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Add A service 
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSumbit}>
                    <div>
                        <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service title</label>
                        <input value={title} onChange={handleChange} type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="the world is yours " required=""/>
                  </div>
                  <div>
                        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service description</label>
                        <input value={desc} onChange={handleChange} type="text" name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description " required=""/>
                  </div>
                  <div>
                        <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service Price</label>
                        <input value={price} onChange={handleChange} type="text" name="price" id="price" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$300" required=""/>
                  </div>
                 
                    <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Add Services </button>
                  
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Addservice