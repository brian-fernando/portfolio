import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
        <header className="bg-red-600">
            <div className="container mx-auto flex jestify-between">
                <nav className="flex">
                    <NavLink to="/" activeClassName="text-white"
                    exact className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Kavinda
                    </NavLink>
                    <NavLink to="/post" 
                    className="inflex-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Blog Posts
                    </NavLink >
                    <NavLink to="/project" 
                    className="inflex-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                    className="inflex-flex item-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
                    activeClassName="text-red-100 bg-red-700">
                        About Me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.linkedin.com/in/fernando-brian/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                    <SocialIcon url="https://www.instagram.com/kavinda_fernando220/" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                    <SocialIcon url="https://github.com/brian-fernando" className="mr-4" target="_blank" fgColor="#fff" style={{ height:35, width:35}}/>
                </div>
            </div>
        </header>
    )
}