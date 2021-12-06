import React from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import Head, { defaultHead } from 'next/head';
import styles from '../scss/pages.module.scss';
import Footer from '../components/Footer';
import SideLeft from '../communs_components/SideLeft';
import { Fragment } from 'react';

import axios from 'axios';




const skills = ({dados}) => {
    
    return(
       <Fragment> 
            <Head> 
                    <title>
                        WebPortfolio: Abraão Morais
                    </title>
                    <meta name='keywords' content='web developer, programmer, react, nextjs, javascript'/>
                </Head>
            <main className = {styles.body}>     
                

                <section className = {styles.side_right_container +  ' ' + styles.pageOut}>
                
                {/* -----------TITULO E SUBTILO ---------------*/}
                    <div className = {styles.wrap_title}>
                        
                        <h1  className = {styles.title}>
                            {/* alguma coisa */}
                            {console.log(dados)}
                            {dados[1].titulo}
                            <p>meu id: {dados[1]._id}</p>
                        </h1>
                        
                        <span className = {styles.line_horizontal}></span>
                        
                        <h2 className = {styles.subtitle}>
                            My personality and behavior
                        </h2>
                    </div> 
                {/* -----------SOFT SKILLS AREA ---------------*/}    
                
                </section>
                    
            </main>
        </Fragment>      
    );
}

skills.getInitialProps = async () => {
    const res = await axios.get('http://localhost:1337/testes')
    return {dados : res.data}
}

// export async function getServerSideProps() {
//     await new Promise((resolve)=>{
//         setTimeout(resolve, 2000)
//     })
//     return { props:{}}
// }

export default skills