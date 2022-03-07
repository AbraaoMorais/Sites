import './keyBoardColors.css'
import React, { useEffect,useState} from 'react'
import KeysStepOne from './keysStepOne';
import KeysStepTwo from './keysStepTwo';
import KeysStepTree from './keysStepTree';
import KeysStepTolerance from './keysStepTolerance';

interface KeyBoardColors {
    colorValue : number
}

const KeyBoardColors = (props : KeyBoardColors) =>{
   
    
    //set values e states for each keyboard
    const [firstColorValue, setFirstColorValue] = useState({value: props.colorValue ,isClicked: false});

    const [secondColorValue, setSecondColorValue] = useState({value: -1,isClicked: false});

    const [thirdColorValue, setThirdColorValue] = useState({value: -1,isClicked: false});

    const [toleranceColorValue, setToleranceColor] = useState({value: -1,isClicked: false});

    //armazena o estado atual de color.value
    const [colorValueFinal, setColorValueFinal ] = useState<number>(3)

    //rendered keyboard colors
    const [renderKeyboard, setRenderKeyboard] = useState()as any

   useEffect (()=>{
    
       
        // set keybord to each step
       const setKeyboard = () => {
        
            //keyboard to first color value
            if(firstColorValue.isClicked === false){
               
                setRenderKeyboard( 
                    <KeysStepOne
                        colorValue={undefined}
                        setColorValue={()=>{}}
                        getValue = {()=>setFirstColorValue({value: props.colorValue, isClicked: true})}
                    />
                )
            }

            //keybord to second color value 
            if (firstColorValue.isClicked === true){
        
                setRenderKeyboard( 
                    <KeysStepTwo
                        colorValue={undefined}
                        setColorValue={()=>{}}
                        getValue = {()=>setSecondColorValue({value: props.colorValue, isClicked: true})}
                    />
                )
            }

            //keyboard to third color value
            if(secondColorValue.isClicked === true){
                setRenderKeyboard( 
                    <KeysStepTree
                        colorValue={undefined}
                        setColorValue={()=>{}}
                        getValue = {()=>setThirdColorValue({value: props.colorValue, isClicked: true})}
                    />
                )
            }

            //keyboard to tolerance color value
            if(thirdColorValue.isClicked === true){
            
                setRenderKeyboard( 
                    <KeysStepTolerance
                        colorValue={undefined}
                        setColorValue={()=>{}}
                        getValue = {()=>setToleranceColor({value: 4, isClicked: true})}
                    />
                )
            }
       }
       setKeyboard()
    //    console.log(setKeyboard)

       
   },[secondColorValue.isClicked, firstColorValue.isClicked, thirdColorValue.isClicked, toleranceColorValue.isClicked])
   
    return(
       <>
            {/* <header className="App-header">
                <DisplayResult 
                    resistenceValue={firstColorValue.value} 
                    resultType={''}
                />
            </header> */}
             
            <div className='key-board-colors-wrapper'>
            
            {
             renderKeyboard
            }
        
            </div>
       </>
        
    );
}

export default KeyBoardColors;