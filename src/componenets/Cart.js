import React ,{useState , useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
    const [dataa, setdataa] = useState([])
    const [amount, setamount] = useState(0); 
    const [keys, setkeys] = useState([])

    
    const data = ()=>{
        const keys = Object.keys(localStorage); 
        console.log(keys)
        const newData = []
        let am = 0
        const dd = [] 
        keys.map((e)=>{
            if(e == 'tokenn' || e=='auth-token' || e== 'admin'){
                console.log('he is here ')
            }
            else{
                const parsedData = JSON.parse(localStorage.getItem(e));
                am+=parseInt(parsedData['price'])
                newData.push(parsedData)
                dd.push(e)
            }
        })
        console.log(am)
        setamount(am)
        setkeys(dd)
        setdataa(newData);
    }
    useEffect(()=>{
        data()

    },[])

    const handleClick = async()=>{
        console.log(keys)
        console.log(localStorage.getItem('tokenn'))
        const data2 = {
            token : localStorage.getItem('tokenn'),
            listt : keys
        }
        const data = await fetch('http://localhost:3000/takeorder', {
            method: 'POST',
            body: JSON.stringify(data2),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const res = await data.json(); 
        console.log(res)
        toast('Services is added ')
        let item = localStorage.getItem('tokenn')
        localStorage.clear()
        localStorage.setItem('tokenn' , item)
    }
  return (
    <div className="cards w-8/12 mx-auto  min-h-screen">
            <ToastContainer />

        <h3 className="my-4 text-center text-2xl font-bold ">Your added items </h3>
    {dataa.map((e) => {
        return (
            <div className="card shadow-lg p-4 flex justify-center flex-col items-center my-4 border   ">
                <h2 className="text-2xl font-bold  my-2  ">{e.title} </h2>
                <p className="text-xl  my-2 ">{e.price}</p>
               
            </div>
        )
    })}
    <p className="text-center font-bold "> Your Bill is of Total : ${amount}</p>

    <div className="flex my-4  justify-center items-center ">
    <button className="p-4 bg-sky-800 font-bold text-white border " onClick={handleClick} >Order Now </button>

    </div>
</div>
  )
}

export default Cart