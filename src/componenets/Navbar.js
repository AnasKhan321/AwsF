import React, { useState ,useEffect } from 'react';
import  {Link } from 'react-router-dom';
import {useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [admin, setadmin] = useState(false)
  const [login, setlogin] = useState(true)
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const checkuser = ()=>{
    if(localStorage.getItem('tokenn')){
        let item = localStorage.getItem('admin') ; 
        console.log(item)
        if(item == 'true'){
            setadmin(true)
            console.log('this is here ')
        }
        else{
            setadmin(false)
            console.log('this is false ')
        }
    }
    else{
        setlogin(false)
        navigate('/login')
    }
  }
  useEffect(()=>{
    checkuser()
  },[])

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
        AWS
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to='/' className="text-white hover:text-gray-400">Home</Link>
          <Link  className="text-white hover:text-gray-400" to='/mycart'> MyCart </Link>
          <Link className="text-white hover:text-gray-400" to='/services' >Services </Link>
        
         {login && <Link className="text-white hover:text-gray-400" to='/myservice'>  MyService </Link>    }
          {admin && <Link className="text-white hover:text-gray-400" to='/adds' >Add Courses</Link>   }
          {admin && <Link className="text-white hover:text-gray-400" to='/dc' >Delete  Courses</Link>   }

        
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-white hover:text-gray-400 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10 10-4.477 10-10-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#" className="block text-white p-2">Home</a>
          <a href="#" className="block text-white p-2">About</a>
          <a href="#" className="block text-white p-2">Services</a>
          <a href="#" className="block text-white p-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
