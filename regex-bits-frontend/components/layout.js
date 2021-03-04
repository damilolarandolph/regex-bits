import React from 'react';
import { BiCodeBlock, BiHome, BiUser } from 'react-icons/bi';
import { NavButton } from './buttons';
import SearchBar from './search';
import * as style from '../styles/Layout.module.css';


export default function Layout({ children }) {
    return <div className="flex flex-col h-screen bg-ui-white">
        <div>
            <Navbar />
        </div>
        <div className="flex ">
            <div>
                <Sidebar />
            </div>
            <div className="w-full px-5 mt-5 ">

                {children}

            </div>
        </div>
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
    return <div className="ml-5">Placeholder</div>
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

function Sidebar() {
    return <nav className={style.sidebar}>
        <ol>
            <li><NavButton selected={true} icon={<BiHome />} text="Home" /></li>
            <li><NavButton icon={<BiCodeBlock />} text="Editor" /></li>
            <li><NavButton icon={<BiUser />} text="Profile" /></li>
        </ol>
    </nav>
}

