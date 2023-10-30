import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { FaSearch } from 'react-icons/fa';
export default function Header() {
  return (
    <header className=" bg-slate-100  shadow-md">
        <div className="flex justify-between items-center max-w-7xl mx-auto py-3">
        <Link to="/">
        <h1 className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent 
        self-center font-serif text-2xl font-semibold whitespace-nowrap">NestWise</h1>
        </Link>
        <form className="bg-gray-200 p-3 rounded-lg flex items-center">
            <input placeholder="Search" 
                  type="text"
                className="bg-transparent focus:outline-none w-24 sm:w-64"
                
                />
            <button>
                <FaSearch className='text-slate-600'/>
            </button>
        </form>
        <ul className="flex gap-4">
            <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">Home</li>
            </Link>
            <Link to= "/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">About</li>
            </Link>
            <Link to="/signin">
            <li className=" text-slate-700 hover:underline">Sign In</li>
            </Link>
        </ul>
        </div>
       
    </header>
  )
}
