import React from 'react';
import logo from "./img/pokemonlogo.png"


export default function Title() {
    return(
        <div style={{backgroundColor:"#2C2C2C", marginBottom:"1vh", padding:"1vh"}}>
            <img src={logo} alt="Logo" style={{height:"15vh"}}/>
        </div>
    )
}