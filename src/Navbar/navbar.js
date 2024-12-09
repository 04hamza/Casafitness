import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    const D=useRef()
    const Delete=()=>{
        D.current.remove()
    }
    return (
        <nav className="navbar">
            <div ref={D} className="BlackFriday">Black Friday Sportif: 4 Weeks + Free Membership Fees <span onClick={Delete}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
           </svg>
                </span></div>
            <div className="navbarmain">
                <div className="left">
                    <div className="title" title="casafit club">CASAFIT</div>
                    <ul>
                        <li>
                            <Link className="link" to="CONCEPT">CONCEPT</Link>
                        </li>
                        <li>
                            <Link className="link" to="SUBSCRIPTIONS">SUBSCRIPTIONS</Link>
                        </li>
                        <li>
                            <Link className="link" to="CLUBS">CLUBS</Link>
                        </li>
                        <li>
                            <Link className="link" to="ACTIVITIES">ACTIVITIES</Link>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div><Link className="blog" to="BLOG">BLOG</Link></div>
                    <div><Link className="login" to="LOGIN">LOGIN</Link></div>
                    <button><Link className="sing" to="SIGN UP">SIGN UP</Link></button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
