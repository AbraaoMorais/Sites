
import React, { useContext } from 'react';
import ResistenceDisplay from './resistenceDisplay'
import './displayResult.css'
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface DisplayResult {
    resistenceValue: number,
    resultType: string,
    tolerancePercentage: number,
    toleranceValueMin: number | string,
    toleranceValueMax: number | string,
}


const isMobile = window.innerWidth < 1024 ? true : false

const DisplayResult = (props: DisplayResult) => {

    const {step} = useContext(KeyColorValueContext);

    // console.log("valor é :"+teste)
    return(
        <>
        <div className='display-wrapper'>
            <div className='display-row1'>
                <div className='display-value'>
                    {props.resistenceValue}
                </div>

                <div className='display-result-details'>
                    <span className={ 
                        step >= 4 ?'result-details-type' :  'result-details-type inactive'
                    }>
                        {props.resultType}
                    </span>
                    {
                        isMobile ? <ResistenceDisplay/> : <span     className='result-details-symbol'>
                        &Omega;
                    </span>
                    }
                    <span className={
                        step >= 4 ? 'result-details-name' :     'result-details-name inactive'
                    }>
                        ohms
                    </span>
                </div>
            </div>
            <div className='display-row2'>
                <span className='tolerance-details'> 
                    Tolerância: {props.tolerancePercentage}%
                </span> 
                <span className='tolerance-details'> 
                    Min: {props.toleranceValueMin} / Max: {props.toleranceValueMax} 
                </span>
            </div>
        </div>
        </> 
    )
}

export default DisplayResult;