
import React from 'react';
import ResistenceDisplay from './resistenceDisplay'
import './displayResult.css'

interface DisplayResult {
    resistenceValue: number,
    resultType: string,
}

const isMobile = window.innerWidth < 1024 ? true : false

const DisplayResult = (props: DisplayResult) => {

    // console.log("valor é :"+teste)
    
    return(
         
        <div className='display-wrapper'>
            <div className='display-value'>
                {props.resistenceValue}
            </div>
            
            <div className='display-result-details'>
                <span className='result-details-type'>
                    {props.resultType}
                </span>
                {
                    isMobile ? <ResistenceDisplay/> : <span className='result-details-symbol'>
                    &Omega;
                </span>
                }
                <span className='result-details-name'>
                    ohms
                </span>
            </div>
          
        </div>
        
    )
}

export default DisplayResult;