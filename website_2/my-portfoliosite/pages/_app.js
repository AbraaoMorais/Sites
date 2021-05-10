import styles from '../styles/global.css'
import NextNProgress from 'nextjs-progressbar';
import React from 'react'


// Router.events.on("routeChangeStart", (url)=>{
//   NProgress.start()
// })


export default function MyApp({Component, pageProps }) {
    return (
      <React.Fragment>
        <Component {...pageProps}/>
        <NextNProgress />
      </React.Fragment>
      
    )
  
}