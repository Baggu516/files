import './Card.css';
import react from "react";
function Card(props){
    return (
      <div className="cardshape">
        <spam><h2>{props.name}</h2></spam>
        <p>{props.tele}</p>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmbT7NhGws9j1JiXvOd2MbYw0Thvl2DTrMbg&usqp=CAU"/><br></br>
          
       
      </div>
    )
  }
export default Card;  