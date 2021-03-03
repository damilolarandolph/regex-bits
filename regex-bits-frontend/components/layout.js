import React from 'react'
import SearchBar from './search'


export default function Layout() {
    return <div className="flex flex-col h-screen bg-ui-white">
        <div>
            <Navbar />
        </div>
        <div className="flex"></div>
    </div>
}


function Navbar() {
    return <div className="flex justify-between px-2 py-3">
        <Logo />
        <div className="w-1/3">
            <SearchBar />
        </div>
        <ProfileSection />
    </div>
}



function Logo() {
    return <div>Placeholder</div>
}


function ProfileSection() {
    return <button className="relative w-10 h-10 mx-4 outline-none group" style={{ outline: 'none' }}>
        <img src="https://via.placeholder.com/150" className="rounded-full group-focus:ring-2 ring-ui-ming " />
        <div
            className="absolute right-0 hidden p-4 mt-2 font-sans font-semibold duration-200 rounded-md group-focus:block bg-ui-grey text-ui-black hover:bg-ui-black hover:text-ui-white" >
            <span>Logout</span>
        </div>
    </button>
}