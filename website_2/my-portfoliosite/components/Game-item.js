import Proptypes from 'prop-types';
import { useState } from 'react';
import styles from '../scss//page-projects/games.module.scss'

const GameItem = (props) => {

    return(
        <>   
            
            <div tabindex="-1" onClick={props.onOpen} className={styles.cover_wrapper}>
               
                <figure>
                    <img src={props.gameCoverUrl} />
                    
                </figure>
                <div className={styles.cover_content}>
                    <h3>{props.gameTitle}</h3>
                    <p>{props.gameDescription}</p>
                    
                    <button>Play now</button>       
                </div>
                   
            </div>
            <input className={styles.close_cover} type="button" value="╳" alt="close button" title="close"/>
        </>
    );
}

GameItem.Proptypes = {
    gameCoverUrl: Proptypes.string.isRequired,
}
export default GameItem;