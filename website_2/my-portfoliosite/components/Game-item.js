import Proptypes from 'prop-types';
import { useState } from 'react';
import styles from '../scss/page-projects/games.module.scss'
import AvaliateSystem from './systems/AvaliationSystem';
import Image from 'next/image'

const GameItem = (props) => {

    return(
        <>   
            
            <div id={"game_" + props.gameID} tabIndex="-1" className={styles.cover_wrapper}>
               
                <figure>
                    <Image
                    // blurDataURL=""
                    // placeholder="blur"
                    
                    className={styles.img} 
                    src={props.gameCoverURL} 
                    alt={props.alt} 
                    title={props.title}
                    width={230}
                    height={270}
                    />
                    
                </figure>
                <div className={styles.cover_content}>
                    
                    <h3>{props.gameTitle}</h3>  
                    
                    <p><gamegenre>Genre: </gamegenre>{props.gameGenero}</p>
                    
                    <div>
                        <AvaliateSystem 
                        avaliation = {props.avaliation}
                        onClick={props.onOpen}
                        />
                    </div>
                    
                    <p>{props.gameDescription}</p>
                      
                    <a href={props.gameURL} rel="noopener" rel="noreferrer" target="_blank">
                        
                        <button> Play now </button>  
                    </a> 
                    
                </div>
                   
            </div>
           
            <input className={styles.close_cover} type="button" value="╳" alt="close button" title="close"/>
           
        </>
    );
}

GameItem.Proptypes = {
    gameID: Proptypes.string.isRequired,
    gameTitle: Proptypes.string.isRequired,
    gameGenero: Proptypes.string.isRequired,
    avaliation: Proptypes.number.isRequired,
    gameDescription: Proptypes.string.isRequired,
    gameURL: Proptypes.string.isRequired,
    gameCoverURL: Proptypes.string.isRequired,
    alt: Proptypes.string,
    title: Proptypes.string,
}

export default GameItem;