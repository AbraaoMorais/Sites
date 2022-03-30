import React from "react"
import { useState,useContext } from "react"
import Input from './Input'
import StepAndAcessibility from './stepAndAcessibility'
import KeyColorValueContext from '../../context/keyColorValueContext.js'


interface KeysStepOneInterface {
    
    colorValue: number | undefined,
    colorOne: object | undefined,
    nameColor: boolean,
    setColorValue: Function,
    setColorOne: Function,
    setStep: Function,
    getValue: Function,
    
}

interface colorInterface{
    color: string,
}

const KeysStepOne = (props: KeysStepOneInterface) =>{
   
    //contexto
    const {colorValue, setColorValue, nameColor, setColorOne, setStep} = useContext<KeysStepOneInterface>(KeyColorValueContext);

    return(
        <>
            <div className="key-step-wrapper">   
                <StepAndAcessibility
                    acessibility={true}
                    step="Primeiro Anel"
                />
            
                <div className='keys-wrapper'>
                <div className='col-1'>

                    <Input
                        value= {nameColor === true ? 'Preto' : ' '}    
                        className='key-black black' 
                        colorValue= {colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(0);
                                setColorOne({ color: 'black',val: 0}) as colorInterface;
                                setStep(1);
                            }
                        }
                     />
                    <Input
                        value={nameColor === true ? 'Marron' : ' '}
                        className='key-brown brown' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(1);
                                setColorOne({color:'brown', val: 1});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value={nameColor === true ? 'Vermelho' : ' '}
                        className='key-red red' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(2);
                                setColorOne({color:'red',val: 2});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value={nameColor === true ? 'Branco' : ' '}
                        className='key-white white'
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(9);
                                setColorOne({color:'white',val: 9});
                                setStep(1);
                            }
                        }
                    />

                </div>
                <div className='col-2'>
                    <Input
                        value={nameColor === true ? 'Laranja' : ' '}
                        className='key-orange orange' 
                        colorValue={3}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(3);
                                setColorOne({color:'orange',val: 3});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value={nameColor === true ? 'Amarelo' : ' '}
                        className='key-yellow yellow'
                        colorValue={4}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(4);
                                setColorOne({color:'yellow',val: 4});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value={nameColor === true ? 'Verde' : ' '} 
                        className='key-green green' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(5);
                                setColorOne({color:'green',val: 5});
                                setStep(1);
                            }
                        }
                    />

                </div>
                <div className='col-3'>
                    <Input
                        value={nameColor === true ? 'Azul' : ' '} 
                        className='key-blue blue' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(6);
                                setColorOne({color:'blue',val: 6});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value={nameColor === true ? 'Violeta' : ' '}
                        className='key-violet violet' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(7);
                                setColorOne({color:'violet',val: 7});
                                setStep(1);
                            }
                        }
                    />
                    <Input
                        value={nameColor === true ? 'Cinza' : ' '}
                        className='key-grey grey'
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(8);
                                setColorOne({color:'grey',val: 8});
                                setStep(1);
                            }
                        }
                    />
                </div>
                </div>         
            </div>
        </>
    )
}

export default KeysStepOne;