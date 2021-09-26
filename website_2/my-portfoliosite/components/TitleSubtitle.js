import React from 'react';
import PropTypes from 'prop-types'
import styles from '../scss/pages.module.scss'

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

TitleSubtitle.PropTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string
}
export default TitleSubtitle;
