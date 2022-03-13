import React, { useContext, useEffect, useState } from "react";
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface StepAndAcessibilityInterface{
    step: string;
}

const StepAndAcessibility = (props:StepAndAcessibilityInterface) =>{

    const {nameColor,setNameColor} = useContext(KeyColorValueContext);
    // const [checkbox, setCheckbox] = useState(false)

    const toggleAcessibility = (event) =>{

        // const target = event.target;
        // console.log('dadad'+target.type === 'checkbox' ? target.checked : target.checked)
            if(nameColor === true){
                
                // console.log(target.checked);
                // setCheckbox(target.checked = false)
                setNameColor(false);

            }else{
                // console.log(target.checked);
                // setCheckbox(target.checked = true)
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