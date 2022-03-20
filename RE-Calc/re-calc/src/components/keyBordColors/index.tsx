import './keyBoardColors.css'
import React, { useContext, useEffect,useState} from 'react'
import KeysStepOne from './keysStepOne';
import KeysStepTwo from './keysStepTwo';
import KeysStepTree from './keysStepTree';
import KeysStepTolerance from './keysStepTolerance';
import KeyColorValueContext from '../../context/keyColorValueContext'

interface KeyBoardColors {
    colorValue : number,
    nameColor: boolean,
    setNameColor: Function,
}

const KeyBoardColors = (props : KeyBoardColors) =>{
   
    //context
    const {nameColor,colorValue, step} = useContext(KeyColorValueContext)
    
    //set values e states for each keyboard
    const [firstColorValue, setFirstColorValue] = useState({value: -1 ,isClicked: false});

    const [secondColorValue, setSecondColorValue] = useState({value: -1,isClicked: false});

    const [thirdColorValue, setThirdColorValue] = useState({value: -1,isClicked: false});

    const [toleranceColorValue, setToleranceColor] = useState({value: -1,isClicked: false});

    //rendered keyboard colors
    const [renderKeyboard, setRenderKeyboard] = useState()as any

   useEffect (()=>{

        // set keybord RENDER to each step IN MOBILE
       const setKeyboard = () => {
        
            //keyboard to first color value
            if(firstColorValue.isClicked === false){
                
                setRenderKeyboard( 
                    <KeysStepOne
                        nameColor
                        colorValue={undefined}
                        colorOne={undefined}
                        setColorValue={()=>{}}
                        setColorOne={()=>{}}
                        setStep={()=>{}}
                        getValue = {
                            ()=>setFirstColorValue(
                                {
                                    value: props.colorValue, isClicked: true
                                }
                            )
                        }
                    />
                )
            }

            //keybord to second color value 
            if (firstColorValue.isClicked === true){
        
                setRenderKeyboard( 
                    <KeysStepTwo
                        nameColor
                        colorValue={undefined}
                        colorTwo={undefined}
                        setColorValue={()=>{}}
                        setColorTwo={()=>{}}
                        setStep={()=>{}}
                        getValue = {
                            ()=>setSecondColorValue(
                                {
                                    value: props.colorValue, isClicked: true
                                }
                            )
                        }
                    />
                )
            }

            //keyboard to third color value
            if(secondColorValue.isClicked === true){
                setRenderKeyboard( 
                    <KeysStepTree
                        nameColor
                        colorValue={undefined}
                        colorTree={undefined}
                        setColorValue={()=>{}}
                        setColorTree={()=>{}}
                        setStep={()=>{}}
                        getValue = {()=>setThirdColorValue({value: props.colorValue, isClicked: true})}
                    />
                )
            }

            //keyboard to tolerance color value
            if(thirdColorValue.isClicked === true){
            
                setRenderKeyboard( 
                    <KeysStepTolerance
                        nameColor
                        colorValue={undefined}
                        colorFor={undefined}
                        setColorValue={()=>{}}
                        setColorFor={()=>{}}
                        step={3}
                        setStep={()=>{}}
                        getValue = {()=>setThirdColorValue({value: props.colorValue, isClicked: true})}
                    />
                )
            }
       }
       setKeyboard()
    //    console.log(setKeyboard)

       
   },[secondColorValue.isClicked, firstColorValue.isClicked, thirdColorValue.isClicked, toleranceColorValue.isClicked])
   
    return(
       <>
            <div className='key-board-colors-wrapper'>
            
            {
             renderKeyboard
            }
        
            </div>
       </>
        
    );
}

export default KeyBoardColors;