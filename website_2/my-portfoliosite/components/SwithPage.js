import React from 'react'
import styles from '../sass/skills.module.scss'
// import { Component } from 'react'

class SwithPage extends React.Component{

    //função trocar estado da cor do botão no nav 
    btnPageActive = () => {
        const [pagina, setPagina] = React.useState(true);
        const [cor, setCor] = React.useState('linear-gradient(to left,rgb(13, 82, 151), rgb(22, 29, 97))')
            
            React.useEffect(()=>{
                setCor((state)=> pagina ? 'linear-gradient(to left,rgb(33, 71, 197), rgb(96, 30, 145))' : 'linear-gradient(to left,rgb(13, 82, 151), rgb(22, 29, 97))')
            },[pagina])
        }   
}

export default SwithPage