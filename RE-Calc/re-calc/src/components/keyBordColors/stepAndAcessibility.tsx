import React, { useContext, useEffect, useState } from "react";
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface StepAndAcessibilityInterface{
    step: string;
}

const StepAndAcessibility = (props:StepAndAcessibilityInterface) =>{

    const {nameColor,setNameColor} = useContext(KeyColorValueContext);
    // const [checkbox, setCheckbox] = useState(false)

    const toggleAcessibility = (event) =>{

            if(nameColor === true){
                setNameColor(false);
            }else{
                setNameColor(true)
            }
} 

    return(
        <div className="keys-header">
            <span className='color-select-step'>
                {props.step}
            </span>
            <label className="button-siwtch">
                <input checked={nameColor} type="checkbox" onChange={toggleAcessibility}/>
                <span className="button-acessibility"/>
            </label>
        </div>
    )
}

export default StepAndAcessibility;