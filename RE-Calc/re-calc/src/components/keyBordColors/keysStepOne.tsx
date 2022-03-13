import React from "react"
import { useState,useContext } from "react"
import Input from './Input'
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface KeysStepOneInterface {
    getValue: Function,
    colorValue: number | undefined,
    colorOne: object | undefined,
    setColorValue: Function,
    setColorOne: Function,
    setStep: Function,
}

interface colorInterface{
    color: string,
}

const KeysStepOne = (props: KeysStepOneInterface) =>{
   
    //contexto
    const {colorValue, setColorValue, colorOne, setColorOne, setStep} = useContext<KeysStepOneInterface>(KeyColorValueContext);

    return(
        <>
            <span className='color-select-step'>
                Primeiro Anel
            </span>
            <div className='keys-wrapper'>
                <div className='col-1'>

                    <Input
                        value=''    
                        className='key-black black' 
                        colorValue= {colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(0);
                                setColorOne({ color: 'black',}) as colorInterface;
                                setStep(1);
                            }
                        }
                     />
                    <Input
                        value='' 
                        className='key-brown brown' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(1);
                                setColorOne({color:'brown',});
                                setStep(1);
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
                                setColorValue(2);
                                setColorOne({color:'red',});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value='' 
                        className='key-white white'
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(9);
                                setColorOne({color:'white',});
                                setStep(1);
                            }
                        }
                    />

                </div>
                <div className='col-2'>
                    <Input
                        value='' 
                        className='key-orange orange' 
                        colorValue={3}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(3);
                                setColorOne({color:'orange',});
                                setStep(1);
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
                                setColorOne({color:'yellow',});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value='' 
                        className='key-green green' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(5);
                                setColorOne({color:'green',});
                                setStep(1);
                            }
                        }
                    />

                </div>
                <div className='col-3'>
                    <Input
                        value='' 
                        className='key-blue blue' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(6);
                                setColorOne({color:'blue',});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value=''
                        className='key-violet violet' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(7);
                                setColorOne({color:'violet',});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value='' 
                        className='key-grey grey'
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(8);
                                setColorOne({color:'grey',});
                                setStep(1);
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default KeysStepOne;