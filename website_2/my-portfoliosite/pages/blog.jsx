import React from 'react-dom'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../sass/pages.module.scss'
import Footer from '../components/Footer'
import SideLeft from '../communs_components/SideLeft'


const skills = () => {
    return(
        
        <main className = {styles.body}>     
            <Head> 
                <title>
                    WebPortfolio: Abraão Morais
                </title>
                <meta name='keywords' content='web developer, programmer, react, nextjs, javascript'/>
            </Head>

            <section className = {styles.side_right_container +  ' ' + styles.pageOut}>
            
            {/* -----------TITULO E SUBTILO ---------------*/}
                <div className = {styles.wrap_title}>
                    
                    <h1  className = {styles.title}>
                        Soft Skills
                    </h1>
                    
                    <span className = {styles.line_horizontal}></span>
                    
                    <h2 className = {styles.subtitle}>
                        My personality and behavior
                    </h2>
                </div> 
            {/* -----------SOFT SKILLS AREA ---------------*/}    
            
            </section>
                
        </main>  
    );
}

// export async function getServerSideProps() {
//     await new Promise((resolve)=>{
//         setTimeout(resolve, 2000)
//     })
//     return { props:{}}
// }

export default skills