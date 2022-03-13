import React from "react"
import { useState,useContext } from "react"
import Input from './Input'
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface KeysStepOneInterface {
    getValue: Function,
    colorValue: number | undefined,
    colorFor: object | undefined,
    step: number,
    setColorValue: Function,
    setColorFor: Function,
    setStep: Function,
}

interface colorInterface{
    color: string,
}

const KeysStepOne = (props: KeysStepOneInterface) =>{
   
     //contexto
     const {colorValue, setColorValue, colorFor, setColorFor, step, setStep} = useContext<KeysStepOneInterface>(KeyColorValueContext);

    return(
        <>
            <span className='color-select-step'>
                Tolerância
            </span>
            <div className='keys-wrapper'>
                <div className='col-1'>

                    <Input 
                        value='Prata'    
                        className='key-silver silver' 
                        colorValue= {colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(0);
                                setColorFor({ color: 'silver',}) as colorInterface;
                                setStep(4);
                            }
                        }
                     />
                     <Input 
                        value='' 
                        className='key-red red'
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(9);
                                setColorFor({color:'red',});
                                setStep(4);
                            }
                        }
                    />
                    

                </div>
                <div className='col-2'>

                    <Input 
                        value='Ouro' 
                        className='key-gold gold' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(1);
                                setColorFor({color:'gold',});
                                setStep(4);
                            }
                        }
                    />
                    <Input 
                        value='' 
                        className='key-orange orange' 
                        colorValue={3}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(3);
                                setColorFor({color:'orange',});
                                setStep(4);
                            }
                        }
                    />

                </div>
                <div className='col-3'>
                <Input 
                        value='' 
                        className='key-brown brown' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(2);
                                setColorFor({color:'brown',});
                                setStep(4);
                            }
                        }
                    />
                    <Input 
                        value='' 
                        className='key-yellow yellow'
                        colorValue={4}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(4);
                                setColorFor({color:'yellow',});
                                setStep(4);
                            }
                        }
                    />
                </div>
               
            </div>
            <div style={{height: '9vmax'}}>
                      
                {
                    step === 4 ? 
                    <Input 
                    value='Recalc' 
                    className='recalc-btn'
                    colorValue={4}
                    onClickBtn={
                        ()=>{window.location.reload();}
                    }
                /> : null
                }            
            </div>  
        </>
    )
}

export default KeysStepOne;