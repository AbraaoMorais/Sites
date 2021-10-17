
import React, {useState} from 'react';
import TitleSubtitle from "../../components/TitleSubtitle"
import styles from "../../scss/pages.module.scss"
import games from '../../scss/page-projects/games.module.scss'
import GameItem from '../../components/Game-item';


const Web = () => {

    const [active, setActive] = useState(null);

    
    
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
                        coverSize={games.game_item}
                        gameCoverUrl = "/src/covergames/dio-dino-cover.png"
                    />
                     <GameItem 
                        coverSize={games.game_item}
                        gameCoverUrl = "/src/covergames/dio-dino-cover.png"
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
