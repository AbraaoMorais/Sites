import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/index.module.css'


const Home =()=>{
    return(
           
    <div>
        <Head>
            <title>
                WebPortfolio: Abraão Morais
            </title>
            <meta name='keywords' content='web developer, programmer, react, nextjs, javascript'/>
        </Head>
      
        <h1 className={styles.index}>
            
          welcome to react!
        </h1>
       
        <Link href="/skills" replace>
            <a>dadaddad</a>
        </Link>

        
    </div>
    );

}

export default Home