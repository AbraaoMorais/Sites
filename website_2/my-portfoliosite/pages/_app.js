import styles from '../styles/global.css'
import NextNProgress from 'nextjs-progressbar';
import React from 'react'



export default function MyApp({Component, pageProps }) {
    return (
      <React.Fragment>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
         {/* <link rel= "preload" as="font" href="https://fonts.googleapis.com/css2?family=Abel&display=swap" rel="stylesheet"/>*/}
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Montserrat+Alternates:wght@500&family=Quicksand:wght@300;500;700&display=swap"
        rel="stylesheet"/>
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        
        <Component {...pageProps}/>
        <NextNProgress />
      </React.Fragment>
      
    )
  
}