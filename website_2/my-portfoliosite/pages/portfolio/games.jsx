
import React, {useState} from 'react';
import TitleSubtitle from "../../components/TitleSubtitle"
import styles from "../../scss/pages.module.scss"
import games from '../../scss/page-projects/games.module.scss'
import GameItem from '../../components/Game-item';


const Web = () => {


    return (
       
        <main  className = {styles.body}>

            <section id="contact" className = {styles.side_right_container}>
                
                <TitleSubtitle 
                    
                    title="Games" 
                    subtitle="Some of my games projects developed to today"
                    
                />

                {/* ============= CONTENT SECTION ===================*/}
                <section className={games.games_wrapper}>
                    <GameItem 

                        onOpen = {()=> {}}
                        
                        gameCoverUrl = "/src/covergames/dio-dino-cover.png"
                    />
                     <GameItem 

                        gameCoverUrl = "/src/certificados/cf1test.jpg"
                    />
                     <GameItem 

                        gameCoverUrl = "/src/covergames/dio-dino-cover.png"
                    />
                </section>

           </section>
        </main>
    );
}

export default Web;
