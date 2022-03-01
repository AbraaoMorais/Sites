
import React from 'react';
import ResistenceDisplay from './resistenceDisplay'
import './displayResult.css'

interface DisplayResult {
    resistenceValue: number;
    resultType: string;
}

const isMobile = window.innerWidth < 1024 ? true : false

const DisplayResult = (props: DisplayResult) => {
    return(
        <div className='display-wrapper'>
            <div className='display-value'>
                4.2{props.resistenceValue}
            </div>
            <div className='display-result-details'>
                <span className='result-details-type'>
                    M{props.resultType}
                </span>
                {
                    isMobile ? <ResistenceDisplay/> : <span className='result-details-symbol'>
                    &Omega;
                </span>
                }
                <span className='result-details-name'>
                    ohm
                </span>
            </div>
        </div>
    )
}

export default DisplayResult;