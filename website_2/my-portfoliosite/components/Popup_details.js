import React, {useRef} from 'react';
import Styles from '../scss/page_skill.module.scss'


const popup_Infor = (props) => {

    return (
        
        <div className={Styles.popup_container}>
            <div className={Styles.popup_content}>
                <div className={Styles.content_wrapp}>
                    <header>
                        <h3>
                            {props.title}
                        </h3>
                    </header>
                    <h4>
                        {props.description}
                    </h4>
                </div>
                <img src={props.imagePostUrl}/>    
            </div>    
        </div>
    );
    
}

export default popup_Infor;
