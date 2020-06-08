import React , {useState} from "react";
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons"

function Header() {

    const [showMenu, setShowMenu] = useState(false)

    let mMenu;
    let mMask;

    if (showMenu){
        mMenu = 
        <div className="w-4/5 z-50 bg-white h-screen absolute right-0 top-0 ">
                <ol className="flex flex-col mt-40">
                    <Link to="/">
                        <li className="py-8 border-t border-black border-b w-full text-center">Home</li>
                    </Link>
                    <Link to="/products">
                    <li className="py-8 border-b border-black w-full text-center">Products</li>
                    </Link>
                    <Link to="/Evaluation">
                    <li className="py-8 border-b border-black w-full text-center">Evaluation</li>
                    </Link>
                    <Link to="/Contact">
                    <li className="py-8 border-b border-black w-full text-center">Contact</li>
                    </Link>
                </ol>
                <span className="text-xl absolute top-0 right-0 p-3">
                    <FontAwesomeIcon icon={faTimes} onClick={() => setShowMenu(!showMenu)}/>
                </span>
        </div>

        mMask = 
        <div className="absolute z-40 top-0 left-0 w-screen h-screen bg-black bg-opacity-50">

        </div>
    }
    
    return(
        <div className="w-full md:shadow-b">
        <nav className="border-b border-black md:border-none font-bold p-3 md:py-8 flex justify-between items-center max-w-screen-xl mx-auto">
            <a href="#" className="text-gold md:text-lg" >NAVATECH</a>
            <span className="text-xl md:hidden">
                <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)}/>
            </span>
                <ol className="hidden md:flex md:w-2/4 md:text-sm justify-evenly ">
                    <Link to="/">
                        <li className="py-8 md:py-2 border-t border-black border-b w-full md:border-none text-center">HOME</li>
                    </Link>
                    <Link to="/products">
                    <li className="py-8 md:py-2 border-b border-black w-full md:border-none text-center">PRODUCTS</li>
                    </Link>
                    <Link to="/Evaluation">
                    <li className="py-8 md:py-2 border-b border-black w-full md:border-none text-center">EVALUATION</li>
                    </Link>
                    <Link to="/Contact">
                    <li className="py-8 md:py-2 border-b border-black w-full md:border-none text-center">CONTACT</li>
                    </Link>
                </ol>
           {mMenu}
           {mMask}
        </nav>
        </div>
    )
}

export default Header

