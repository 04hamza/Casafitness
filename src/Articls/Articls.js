import { Link } from "react-router-dom"
import "./Articls.css"

const Articls=({articl})=>{
    console.log(articl)
    return(
        <div className="articl">
           <Link className="img" to={articl.url}>
              <img src={articl.src}></img>
           </Link>
           <div className="text">
            <div className="title">{articl.title}</div>
            <hr></hr>
            <div className="url"><Link className="link" to={articl.url}>Read more</Link></div>
           </div>
        </div>
    )
}
export default Articls;