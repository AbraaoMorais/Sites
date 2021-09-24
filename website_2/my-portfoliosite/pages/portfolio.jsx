import React from 'react'
import styles from '../scss/pages.module.scss'
import TitleSubtitle from '../components/TitleSubtitle'

const portfolio = () => {
    return (
        <main  className = {styles.body}>

        <section id="contact" className = {styles.side_right_container}>
            
            {/* -----------TITULO E SUBTILO ---------------*/}
            <TitleSubtitle title="Projects" subtitle= "some of my projects developed today"/>
        
            {/* -----------CONTENT AREA ---------------*/}
        </section>    
    </main>
    );
}
export default portfolio