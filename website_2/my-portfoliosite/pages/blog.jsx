//import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/skills.module.scss'
import Footer from '../components/Footer'
import SideLeft from '../components/SideLeft'
import { Fragment } from 'react'

const skills = () => {
    return(
        <main className = {styles.main}>  
            <SideLeft/>
            <Head>
                <section className = {styles.side_right_container}>
                    <h1>
                        skillsskillsskills
                        skills
                    </h1>
                </section>
            </Head>
            <Footer/>
        </main>  
    );
}
export default skills