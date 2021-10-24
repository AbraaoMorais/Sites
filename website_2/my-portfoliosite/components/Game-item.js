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
                <button>Play now</button>          
            </div>
            
        </>
    );
}

GameItem.Proptypes = {
    gameCoverUrl: Proptypes.string.isRequired,
}
export default GameItem;