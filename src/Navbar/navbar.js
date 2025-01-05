import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
    const D=useRef()
    const ListShowed1=useRef()
    const ListShowed2=useRef()
    const Delete=()=>{
        D.current.remove()
    }
    const AddShowList =()=>{
      ListShowed1.current.classList.add("ListShowed")
    }
    const DeleteShowList =()=>{
        ListShowed1.current.classList.remove("ListShowed")
      }
      const AddShowList2 =()=>{
        ListShowed2.current.classList.add("ListShowed2")
      }
      const DeleteShowList2 =()=>{
        ListShowed2.current.classList.remove("ListShowed2")
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
                    <div className="title" title="casafit club"><Link className="casafit" to={"/"}>CASAFIT</Link></div>
                    <ul className="mainul">
                        <li className="icon CONCEPT">
                            <Link onMouseLeave={DeleteShowList} onMouseEnter={AddShowList} className="link" to="CONCEPT">CONCEPT</Link>
                            <ul onMouseLeave={DeleteShowList} onMouseEnter={AddShowList} ref={ListShowed1} className="dropul">
                               <li><Link className="linktwo" to="Home Park">Home Park</Link></li>
                               <li><Link className="linktwo" to="Burning Park">Burning Park</Link></li>
                               <li><Link className="linktwo" to="Fight Park">Fight Park</Link></li>
                               <li><Link className="linktwo" to="Cycle Park">Cycle Park</Link></li>
                               <li><Link className="linktwo" to="Train at Fitness Park">Train at Fitness Park</Link></li>
                               <li><Link className="linktwo" to="The Fitness Park App">The Fitness Park App</Link></li>
                            </ul>
                        </li>
                        <li className="icon SUBSCRIPTIONS">
                            <Link className="link" to="SUBSCRIPTIONS">SUBSCRIPTIONS</Link>
                        </li>
                        <li className="icon CLUBS">
                            <Link className="link" to="CLUBS">CLUBS</Link>
                        </li>
                        <li className="icon ACTIVITIES">
                            <Link onMouseLeave={DeleteShowList2} onMouseEnter={AddShowList2} className="link" to="/Activities">ACTIVITIES</Link>
                            <ul onMouseLeave={DeleteShowList2} onMouseEnter={AddShowList2} ref={ListShowed2} className="dropul">
                               <li><Link className="linktwo" to="/musculation">Musculation</Link></li>
                               <li><Link className="linktwo" to="/cross-training">Cross Training</Link></li>
                               <li><Link className="linktwo" to="/cardio-training">Cardio Training</Link></li>
                               <li><Link className="linktwo" to="/cours_collectifs">Cours collectifs </Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="right">
                    <div><Link className="blog" to="BLOG">BLOG</Link></div>
                    <div><Link className="login" to="/loginform">LOGIN</Link></div>
                    <button><Link className="sing" to="gyms">SIGN UP</Link></button>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
