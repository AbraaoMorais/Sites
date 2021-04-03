import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/index.module.css'
import Nav from '../components/Nav'



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
                <div className = {styles.side_left_container}>
                    <Nav/>
                </div>
                <div className= {styles.side_right_container}>
                    <Nav/>
                </div>
            </main>
            
        </body>
    );

}
export async function getServerSideProps (){

   
    //passa data para a home via props
    return {
        props: {
            // data
        }
    }
}