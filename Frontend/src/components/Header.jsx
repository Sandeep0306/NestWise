import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaSearch } from 'react-icons/fa';
import { useSelector } from "react-redux";
export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  const [searchTerm, setSearchTerm]  = useState('');

  useEffect(() =>{
    
  })

  return (
    <header className=" bg-slate-100  shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-4">
        <Link to="/">
        <h1 className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent 
        self-center font-serif text-2xl font-semibold whitespace-nowrap">NestWise</h1>
        </Link>
        <form className="bg-gray-200 p-3 rounded-lg flex items-center">
            <input placeholder="Search" 
                  type="text"
                className="bg-transparent focus:outline-none w-24 sm:w-64" />
            <button>
                <FaSearch className='text-slate-600'/>
            </button>
        </form>
        <ul className="flex gap-5">
            <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline text-lg">Home</li>
            </Link>
            <Link to= "/about">
            <li className="hidden sm:inline text-slate-700 hover:underline text-lg">About</li>
            </Link>
           
            <Link to="/profile">
            {currentUser ? (<img src={currentUser.avatar} alt="profile" className="rounded-full h-7 w-7 object-cover"/>) 
            
            : (<li className=" inline-block ml-4 px-5 py-2 text-sm font-medium text-white
             bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent
              hover:text-violet-600 focus:outline-none focus:ring">Sign In</li>
              )}
            </Link>
        </ul>
        </div>
       
    </header>
  )
}
