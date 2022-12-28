import React from "react";
import Home from './Home';
import Result from './Result';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./Card";
function ReactRout(){
    return(
         <div className="ReactRout">
            <ul>
                <li> <a href="/home">Home</a></li>
                <li> <a href="/result">Result</a></li>
                
            </ul>

            <BrowserRouter>
            <Routes>
                  <Route index element={<Home/>}></Route>
                  <Route path="/result/*" element={<Result />}></Route>
                  <Route path="/home" element={<Home />}></Route>
                  <Route path="/cards" element={<Card/>}></Route>

              </Routes>
            </BrowserRouter>
         
            </div>
    );
}
export default ReactRout;