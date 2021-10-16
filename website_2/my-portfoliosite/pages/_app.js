import styles from '../styles/global.css';
import NextNProgress from 'nextjs-progressbar';
import React from 'react';
import Head from 'next/head';
import SideLeft from '../communs_components/SideLeft';
import Footer from '../components/Footer';
import "../scss/Alice-carousel/alice-carousel.scss";




export default function MyApp({Component, pageProps }) {
    return (
        <React.Fragment>
          <Head>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
         
            <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Montserrat+Alternates:wght@500&family=Quicksand:wght@300;500;700&display=swap"
            rel="stylesheet"/>
            
            <link rel="preload" as="font" href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
          </Head> 
          
          <NextNProgress />
          
          {/*----------this is area of side menu--------------- */}
          <section className = {styles.sectionLeft}>
                    <SideLeft/>          
          </section>

          <Component {...pageProps}/>

          {/*----------this is area of footer--------------- */}
          <Footer />
          
          
        </React.Fragment>
    )
  
}