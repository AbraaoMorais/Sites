import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import Styles from '../scss/page_skill.module.scss'


const popup_Infor = ({
    title, 
    description, 
    imagePostUrl,
}) => {
    

    return (
        
        <div className={Styles.popup_container}>
            <div className={Styles.popup_content}>
                <div className={Styles.content_wrapp}>
                    <header>
                        <h3>
                            {title}
                        </h3>
                    </header>
                    <h4>
                        {description}
                    </h4>
                </div>
                <img src={imagePostUrl}/>    
            </div>    
        </div>
    );
    
}

popup_Infor.PropTypes = {
    
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imagePostUrl: PropTypes.string.isRequired,
}

export default popup_Infor;
