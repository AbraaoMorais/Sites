import React, {Fragment} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../sass/pages.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'


// import SwithPage from '../components/SwithPage.js'



const skills = () => {
    return(
        <Fragment>
            <Head>
                <title>
                    WebPortfolio: Abraão Morais
                </title>
                <meta name='keywords' content='web developer, programmer, react, nextjs, javascript'/>
                
            </Head>
            <main  className = {styles.body}>     

                <section id="skills" className = {styles.side_right_container}>
                
                {/* -----------TITULO E SUBTILO ---------------*/}
                    <TitleSubtitle title="Soft Skills" subtitle= "My pesonality and behavior"/>
                {/* -----------SOFT SKILLS AREA ---------------*/}
                    
                </section>
                    
            </main>
        </Fragment>      
    );
}

// export async function getServerSideProps() {
//     await new Promise((resolve)=>{
//         setTimeout(resolve, 2000)
//     })
//     return { props:{}}
// }

export default skills