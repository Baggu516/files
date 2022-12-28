import './Card.css';
import react,{useContext} from "react";
import { userContext } from './Result';
function Card(){
    const a=useContext(userContext)
    return (
      <div className="cardshape">
        <h2>Name : </h2>
        <p> {sessionStorage.getItem("n")}</p><br/>
        <h2>Roll_No : </h2>
        <p>  {sessionStorage.getItem("r1")} </p><br/>
        <h2>CGPA : </h2>
        <p>{sessionStorage.getItem("s1")}</p><br/>

        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbT7NhGws9j1JiXvOd2MbYw0Thvl2DTrMbg&usqp=CAU"/><br></br>
          
       
      </div>
    )
  }
export default Card;  