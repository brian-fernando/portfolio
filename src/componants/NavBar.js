import React from "react"
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import BF_icon003 from "../BF_icon003.png";

export default function NavBar() {
    return (
        <header className="bg-black">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <img
                        src={BF_icon003}
                        alt="About Background"
                        className="inflex-flex items-center py-3 px-3 my-6 mx-6 "
                        style={{ height: "60px", width: "60px" }}
                    />
                    <NavLink to="/" activeClassName="text-white"
                        exact className="inflex-flex items-center py-8 px-3 mr-4 text-green-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest">
                        Kavinda
                    </NavLink>
                    <NavLink to="/post"
                        className="inflex-flex item-center py-3 px-3 my-6 rounded text-green-200 hover:text-white"
                        activeClassName="text-red-100 bg-gray-600 bg-opacity-50">
                        Blog Posts
                    </NavLink >
                    <NavLink to="/project"
                        className="inflex-flex item-center py-3 px-3 my-6 rounded text-green-200 hover:text-white"
                        activeClassName="text-red-100 bg-gray-600 bg-opacity-50">
                        Projects
                    </NavLink>
                    <NavLink to="/about"
                        className="inflex-flex item-center py-3 px-3 my-6 rounded text-green-200 hover:text-white"
                        activeClassName="text-red-100 bg-gray-600 bg-opacity-50">
                        About Me
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon
                        url="https://www.linkedin.com/in/fernando-brian/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://www.instagram.com/kavinda_fernando220/"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                    <SocialIcon
                        url="https://github.com/brian-fernando"
                        className="mr-4"
                        target="_blank"
                        fgColor="#fff"
                        style={{ height: 35, width: 35 }}
                    />
                </div>
            </div>
        </header>
    )
}