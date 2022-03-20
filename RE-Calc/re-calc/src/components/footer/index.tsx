import React from "react";
import logoDesk from '../../images/logo-desktop.png';
import logoMobi from '../../images/logo-mobile.png';
import './footer.css'

const logo = window.innerWidth < 1024 ? logoMobi : logoDesk

const Footer = () =>{
    return(
        
        <footer className="footer-wrapper">
        <div className="copy-wrapper">  
            <h1>
                Recalc
                <img src={logo} className="App-logo" alt="logo" />
            </h1>
            <div>
                <h3>Developed by:</h3>
                <h2>Abraão Morais</h2>
            </div>
        </div>      
        <div>
            <h4>&#x2713; 1.1</h4>
        </div>
        </footer>
    )
}

export default Footer;