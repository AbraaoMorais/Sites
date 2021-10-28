
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
                        avaliation = {5}
                        gameTitle="dio dino: the game"
                        gameGenero="Platform game"
                        gameDescription= {<>Developed in the practical class of the javascript course ES6 offered by the D.I.O (Digital Innovation One). The same is a recreation of the famous chrome dinosaur game, available when internet connection is interrupted in chrome browser.
                            </>}
                            
                        gameURL="https://abraaomorais.github.io/games/dio-dino-game"
                        gameCoverURL = "/src/covergames/dio-dino-cover.png"
                    />
                     <GameItem 
                        gameTitle="other game title"
                        gameGenero="undefined"
                        avaliation={3}
                        gameDescription="Lorem Ipsum is simply dummy text of the printing and     typesetting industry. Lorem Ipsum has been the industry's   standard dummy text ever since the 1500s, when an unknown     printer took a galley of type and scrambled it to make a    type specimen book."
                        gameCoverURL = "/src/certificados/cf1test.jpg"
                    />
                     <GameItem 

                        gameCoverURL = "/src/covergames/dio-dino-cover.png"
                    />
                </section>

           </section>
        </main>
    );
}

export default Web;
