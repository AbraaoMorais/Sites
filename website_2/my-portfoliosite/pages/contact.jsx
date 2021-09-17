import { Fragment } from "react"
import styles from '../sass/pages.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'
import Head from 'next/head'

const contact = () => {
    return (
        <Fragment>
        <main  className = {styles.body}>

            <section id="contact" className = {styles.side_right_container}>
                
                {/* -----------TITULO E SUBTILO ---------------*/}
                <TitleSubtitle title="Contact Me" subtitle= "Contact me for e-mail"/>
            
                {/* -----------CONTENT AREA ---------------*/}
            </section>    
        </main>

    </Fragment>     
    );
}
export default contact