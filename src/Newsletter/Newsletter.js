import "./Newsletter.css"
import { Link } from "react-router-dom";
import { useState } from "react";
const Newsletter=()=>{
    const [email,setEmail]=useState("")
    const handelEmail=(e)=>{
        setEmail(e.target.value)
        console.log(email)
    }
    const handelSubmit=(e)=>{
        if(!email.includes("@")){
            e.preventDefault()
             alert("email invalid")
         }
    }
    return(
    <div className="newsletter">
        <div className="left">
                <div className="Question">WEIGHT LOSS, MUSCLE GAIN, OR JUST GETTING BACK IN SHAPE?</div>
                <div className="text">Achieve your goal with our personalized support: recipes, training sessions, and tips!</div>   
        </div>
        <div className="center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
        <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
       </svg>
        </div>
        <div className="right">
            <form onSubmit={handelSubmit}>
               <input onChange={handelEmail} type="text" placeholder="My email address"></input>
               <button type="submit">Sign me up!</button>
               <div>Adding your email is not possible. Please check your email address.</div>
               <span>By subscribing to the newsletter, I agree that my data will be processed in accordance with <Link className="Privacy" to="Privacy Policy">the CASAFIT Club Privacy Policy.</Link></span>
            </form> 
        </div>
    </div>
    );}
export default Newsletter;