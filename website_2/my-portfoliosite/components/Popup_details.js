import React, {useRef} from 'react';
import Styles from '../sass/page_skill.module.scss'


const popup_Infor = ({children}) => {

    return (
        
        <div className={Styles.popup_container}>
            {children}
        </div>
    );
    
}

export default popup_Infor;
