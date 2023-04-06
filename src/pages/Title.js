import React from 'react';
import logo from "./img/pokemonlogo.png"
import pokeball from "./img/pokeball.png"
import '../App.css'


export default function Title() {
    return (
        <div style={{ backgroundColor: "#2C2C2C", marginBottom: "1vh", padding: "1vh" }}>
            <img className='logo' src={logo} alt="Logo" style={{ maxHeight: "15vh", maxWidth: "100%", }} />
        </div>
    )
}