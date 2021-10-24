import React from 'react';
import TitleSubtitle from "../../components/TitleSubtitle"
import styles from "../../scss/pages.module.scss"
const Web = () => {
    return (
        <main  className = {styles.body}>
            <section id="contact" className = {styles.side_right_container}>
                <TitleSubtitle 
                    title="Web" 
                    subtitle="Some of my web projects developed to today"
                />
           </section>
        </main>
    );
}

export default Web;
