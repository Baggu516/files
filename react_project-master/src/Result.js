import { useState } from "react";
import './App.css';
import React from "react";
import Emoji from "./Emoji";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Card from "./Card";
export const userContext=React.createContext()
function Result(){
    const [r,setRoll]=useState();
    const [s,setSem]=useState("I");
    const [name,setName]=useState();
    const [score,setScore]=useState();
    function textChange(event){
        setRoll(event.target.value)
    }
    function textChange1(event){
        setSem(event.target.value)
    }
    // function hi(e){
    //     e.preventDefault();
    //     alert("hii")
    // }
    // console.log(c);
    // console.log(r);
    let res=(p)=>{
        setScore(p)
    }
    let res1=(p1)=>{
        setName(p1)
    }
    function buttonHandler(e){
        e.preventDefault();
    //    console.log(Emoji.length);
    //    console.log(Emoji[0][s],typeof(s));
    //    console.log(s);
        var c=0;
        //console.log(r)
        for(var i=0;i<Emoji.length;i++){
            
            if(r.toUpperCase()===Emoji[i].ROLLNO){
                let a=res(Emoji[i][s.toUpperCase()]);
                let b=res1(Emoji[i]["me"])
               // console.log(name);
                alert("YOUR CGPA IS"+" ---> "+Emoji[i][s.toUpperCase()]);
                c+=1
                //{<Card score={name}/>}
                break;
            }
        }
        if(c===0){
            alert("YOUR RESULT IS NOT AVALIABLE");
        }
       }
    //    function cardss(){
    //     if(name!==""){
    //         {<Card score="bagguuu"/>}
    //         console.log("hi")
    //         console.log(name)
    //      }
    //    }
       sessionStorage.setItem("n",name)
       sessionStorage.setItem("s1",score)
       sessionStorage.setItem("r1",r)

       console.log(sessionStorage.getItem("n"),"kkkkkkkkkkkkkk")
       console.log("typeeeeeeeeeeeeeeeee")
       console.log(name)
    return(
        <>
        <h1><marquee scrollamount="15" direction="right">kNOWN YOUR RESULT </marquee></h1>
        
        <div className="res">
       
            <form >
                <label>Roll_No:</label>
                <input placeholder="Your Roll_No" type="text" onChange={textChange}></input><br/>
                <label>Semester:</label>
                <input placeholder="RomanLetters(Ex: I or V)" type="text" onChange={textChange1}></input><br/>

                <button onClick={ buttonHandler}>submit</button>
            </form>
        </div>
        <h3>IF Result are not found Don't click below link:</h3>
        <p>To view result in separate Tab/Card</p>
        <a href="/cards">click Me</a>
        {/* <userContext.Provider value={name}>
         <Card/>
        </userContext.Provider> */}
       
        </>
    )
}
export default Result;