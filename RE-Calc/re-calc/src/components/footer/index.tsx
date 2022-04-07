import React from "react";
import logoDesk from '../../images/logo-desktop.png';
import logoMobi from '../../images/logo-mobile.png';
import './footer.css'
import SelectedColors from "../selectedColors";

const logo = window.innerWidth < 1024 ? logoMobi : logoDesk

const Footer = () =>{
    return(
        
        <footer className="footer-wrapper">
               
            <div className="copy-wrapper">  
                <h1 title="Calculadora de reistência eletrônica">
                    Recalc
                    <img src={logo} className="App-logo" alt="logo" title="Calculadora de reistência eletrônica"/>
                </h1>
                <div>
                    <a href="https://github.com/AbraaoMorais" title="click para acessar o repositório">
                        <h3>Developed by:</h3>
                        <h2>Abraão Morais</h2>
                    </a>
                </div>
            </div>
            <div>
                <h4>&#x2713; 1.3</h4>
            </div>
            {window.innerWidth < 1024 ? null : <SelectedColors/>  }  
        </footer>
    )
}

export default Footer;