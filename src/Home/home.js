import React, { useEffect, useState } from "react";
import "./home.css";
import Articls from "../Articls/Articls";
import Newsletter from "../Newsletter/Newsletter";
const  Home=()=>{
    const [numberclub,setNumberclub]=useState(0)
    const [Recipes,setRecipes]=useState([{
      url:"Protein Chicken Alfredo",
      src:"https://img.youtube.com/vi/RHrBR6ccdMA/sddefault.jpg",
      title:"Protein Chicken Alfredo"},{
      url:"Healthy Breakfast has 45g of Protein",
      src:"https://img.youtube.com/vi/dLairfd8bZU/sddefault.jpg",
      title:"Healthy Breakfast has 45g of Protein"
      },{
      url:"Why OATBARS are Amazing as a Snack",
      src:"https://img.youtube.com/vi/-VRsAiJ0hG0/sddefault.jpg",
      title:"Why OATBARS are Amazing as a Snack"}])
    useEffect(()=>{
      if(numberclub<10){
        const Time=setTimeout(()=>{
          setNumberclub(numberclub+1)
        },200)
      }
    },[numberclub])
    return(
        <div className="home">
        <div className="image-container-one">
          <img src="images/imgone.png" alt="PUSH YOURSELF AND ACHIEVE" />
          <div className="overlay-text-div">PUSH YOURSELF AND ACHIEVE <span>YOUR GOALS!</span></div>
          <p className="overlay-text-p"><span>Find your nearest CASAFIT club</span>among a network of over 10 clubs, open from 6 AM to 11 PM, in Morocco, the overseas territories, and internationally.</p>
        </div>
        <div className="image-container-tow" >
         <img src="images/imgtow.png" alt="PUSH YOURSELF AND ACHIEVE" />
         <div className="numberclub">
          CASAFIT SPORTS CLUBS<span>{numberclub}</span>
         </div>
         <div className="infoclub">
         <span>Find your nearest CASAFIT club </span>and enjoy access 7 days a week, from 6 AM to 11 PM.
         <br></br>
         With your CASAFIT membership card, you have unlimited access to all our clubs, open from 6 AM to 11 PM* in Morroco, Spain, and the overseas territories.
         <br></br>
         Non-stop, 7 days a week, 365 days a year, to train, push your limits, and achieve your goals without restrictions.
         </div>
        </div>
        <div className="image-container-tree">
          <img src="images/imgtree.png" alt="PUSH YOURSELF AND ACHIEVE" />
          <div className="numberclub">
          <span>Over 200,000</span><br></br>Members
         </div>
         <div className="infoclub">
         Join our community of enthusiasts who push themselves daily to achieve their goals.
        <br></br>
        Sign up today and enjoy all the benefits of France's favorite fitness brand!
         </div>
        </div>
        <div  className="image-container-four">
             <div className="title">
                <div className="bold">Fitness Park News</div>
                <div className="yellow">Discover our latest articles</div>
                <hr></hr>
             </div>
             <div className="articls">
              <Articls articl={Recipes[0]}/>
              <Articls articl={Recipes[1]}/>
              <Articls articl={Recipes[2]}/>
             </div>
        </div>
        <div  className="image-container-four">
             <div className="title">
                <div className="bold">CASAFIT CLUB</div>
                <hr></hr>
             </div>
             <iframe
                  src="https://www.youtube.com/embed/CpTTOnbldsA"
                  width="1400"
                  height="705"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen>
             </iframe>
        </div>
        <div  className="image-container-five">
        <Newsletter/>
        </div>
      </div>
    )
}
export default Home;