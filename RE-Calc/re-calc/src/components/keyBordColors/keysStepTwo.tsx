import React,{ useState,useContext } from "react";
import Input from './Input';
import StepAndAcessibility from './stepAndAcessibility';
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface KeysStepOneInterface {

    colorValue: number | undefined,
    colorTwo: object | undefined,
    nameColor: boolean,
    setColorValue: Function,
    setColorTwo: Function,
    setStep: Function,
    getValue: Function,
}

interface colorInterface{
    color: string,
}

const KeysStepTwo = (props: KeysStepOneInterface) =>{
   
    //contexto
    const {colorValue, setColorValue, nameColor, setColorTwo, setStep} = useContext<KeysStepOneInterface>(KeyColorValueContext);
    
    const isMobile = window.innerWidth < 1024 ? true : false

    return(
        <>
            <div className="key-step-wrapper">
                <StepAndAcessibility
                acessibility={isMobile ? true : false}
                step="Segundo Anel"
                />
                <div className='keys-wrapper'>
                <div className='col-1'>

                    <Input
                        value={nameColor === true ? 'Preto' : ' '}    
                        className='key-black black' 
                        colorValue= {colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(0);
                                setColorTwo({ color: 'black',val: 0}) as colorInterface;
                                setStep(2);
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
                                setColorTwo({color:'brown',val: 1});
                                setStep(2);
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
                                setColorTwo({color:'red',val: 2});
                                setStep(2);
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
                                setColorTwo({color:'white',val: 9});
                                setStep(2);
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
                                setColorTwo({color:'orange',val: 3});
                                setStep(2);
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
                                setColorTwo({color:'yellow',val: 4});
                                setStep(2);
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
                                setColorTwo({color:'green',val: 5});
                                setStep(2);
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
                                setColorTwo({color:'blue',val: 6});
                                setStep(2);
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
                                setColorTwo({color:'violet',val: 7});
                                setStep(2);
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
                                setColorTwo({color:'grey',val: 8});
                                setStep(2);
                            }
                        }
                    />
                </div>
                </div>
            </div>
        </>
    )
}

export default KeysStepTwo;