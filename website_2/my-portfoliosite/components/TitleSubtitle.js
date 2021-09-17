import React from 'react';
import styles from '../sass/pages.module.scss'

const TitleSubtitle = (props) => {
    return (
        <div className = {styles.wrap_title}>
                        
            <h1  className = {styles.title}>
                {props.title}
            </h1>
            
            <span className = {styles.line_horizontal}></span>
            
            <h2 className = {styles.subtitle}>
                {props.subtitle}
            </h2>
        </div> 
    );
}

export default TitleSubtitle;
