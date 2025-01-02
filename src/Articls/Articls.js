import { Link } from "react-router-dom"
import "./Articls.css"
import { useNavigate } from "react-router-dom"
const Articls=({articl})=>{
    const nav=useNavigate()
    const Toarticl=()=>{
        nav(`/Recipes/${articl.title}`,{state:{id:articl.id}})
    }
    return(
        <div onClick={Toarticl} className="articl">
           <div className="img">
              <img src={articl.src}></img>
           </div>
           <div className="text">
            <div className="title">{articl.title}</div>
            <hr></hr>
            <div className="url"><div onClick={Toarticl} className="link">Read more</div></div>
           </div>
        </div>
    )
}
export default Articls;