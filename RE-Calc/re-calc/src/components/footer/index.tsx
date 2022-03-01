import React from "react";
import logoDesk from '../../images/logo-desktop.png';
import logoMobi from '../../images/logo-mobile.png';
import './footer.css'

const logo = window.innerWidth < 1024 ? logoMobi : logoDesk

const Footer = () =>{
    return(
        <footer className="footer-wrapper">
            <h1>
                Recalc
                <img src={logo} className="App-logo" alt="logo" />
            </h1>
            <div>
                <h2>Developed by:</h2>
                <h3>Abraão Morais</h3>
            </div>
        </footer>
    )
}

export default Footer;