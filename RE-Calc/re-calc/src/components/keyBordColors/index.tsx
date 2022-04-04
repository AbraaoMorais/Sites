import './keyBoardColors.css'
import React, {useEffect,useState} from 'react'
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

    //verifica o device
    let deviceIs = window.innerWidth <= 1024 ? 'mobile' : 'desktop'
   
    
    //set values e states for each keyboard
    const [firstColorValue, setFirstColorValue] = useState({value: -1 ,isClicked: false});

    const [secondColorValue, setSecondColorValue] = useState({value: -1,isClicked: false});

    const [thirdColorValue, setThirdColorValue] = useState({value: -1,isClicked: false});

    const [toleranceColorValue, setToleranceColor] = useState({value: -1,isClicked: false});

    //rendered keyboard colors
    const [renderKeyboardMobile, setRenderKeyboardMobile] = useState()as any

   useEffect (()=>{

    //////////////// set keybord RENDER to each step IN MOBILE /////////////////
       const setKeyboard = () => {
        
            //keyboard to first color value
            if(firstColorValue.isClicked === false){
                
                setRenderKeyboardMobile( 
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
        
                setRenderKeyboardMobile( 
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
                setRenderKeyboardMobile( 
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
            
                setRenderKeyboardMobile( 
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
   




    ///////////////  render keyboard desktop //////////////////////////
    const renderKeyBoardDesktop = () =>{
        return(
           <>
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

                <KeysStepTree
                    nameColor
                    colorValue={undefined}
                    colorTree={undefined}
                    setColorValue={()=>{}}
                    setColorTree={()=>{}}
                    setStep={()=>{}}
                    getValue = {()=>setThirdColorValue({value: props.colorValue,  isClicked: true})}
                />
                
                <KeysStepTolerance
                    nameColor
                    colorValue={undefined}
                    colorFor={undefined}
                    setColorValue={()=>{}}
                    setColorFor={()=>{}}
                    step={3}
                    setStep={()=>{}}
                    getValue = {()=>setThirdColorValue({value: props.colorValue,isClicked: true})}
                />
           </>
       )
    }





    return(
       <>
            <div className='key-board-colors-wrapper'>
            
            {
             deviceIs === 'mobile' ? renderKeyboardMobile : renderKeyBoardDesktop() 
            }
        
            </div>
       </>
        
    );
}

export default KeyBoardColors;