import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import SideLeft from '../components/SideLeft'



export default function Home ({data}) {
    return(
        <body className = {styles.body}>  
            <Head>
                <title>
                    WebPortfolio: Abraão Morais
                </title>
                <meta name='keywords' content='web developer, programmer, react, nextjs, javascript'/>
            </Head>
            
            <main className = {styles.main}>

    {/*----------this is area of main menu--------------- */}

                <section className = {styles.sectionLeft}>          
                    <SideLeft/>
                </section>     

    {/*----------this is area of content--------------- */}
    
                <section className= {styles.side_right_container}>
                    
                </section>
            </main>
            
        </body>
    );

}
export async function getServerSideProps (){

   
    //passa data para a home via props
    return {
        props: {
            
        }
    }
}