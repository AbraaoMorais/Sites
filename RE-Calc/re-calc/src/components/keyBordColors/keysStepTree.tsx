import React,{ useState,useContext } from "react"

import Input from './Input';
import StepAndAcessibility from './stepAndAcessibility'
import KeyColorValueContext from '../../context/keyColorValueContext.js'


interface KeysStepOneInterface {
    
    colorValue: number | undefined,
    colorTree: object | undefined,
    nameColor: boolean,
    setColorValue: Function,
    setColorTree: Function,
    setStep: Function,
    getValue: Function,

}

interface colorInterface{
    color: string,
}

const KeysStepOne = (props: KeysStepOneInterface) =>{
   
    //contexto
    const {colorValue, setColorValue, nameColor, setColorTree, setStep} = useContext<KeysStepOneInterface>(KeyColorValueContext);
    
    return(
        <>
            <StepAndAcessibility
                step="Terceiro Anel"
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
                                setColorValue(1);
                                setColorTree({ color: 'black',}) as colorInterface;
                                setStep(3);
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
                                setColorValue(10);
                                setColorTree({color:'brown',});
                                setStep(3);
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
                                setColorValue(100);
                                setColorTree({color:'red',});
                                setStep(3);
                            }
                        }
                    />
                    <Input
                        value="Ouro" 
                        className='key-white gold'
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(0.1);
                                setColorTree({color:'gold',});
                                setStep(3);
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
                                setColorValue(1000);
                                setColorTree({color:'orange',});
                                setStep(3);
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
                                setColorValue(10000);
                                setColorTree({color:'yellow',});
                                setStep(3);
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
                                setColorValue(100000);
                                setColorTree({color:'green',});
                                setStep(3);
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
                                setColorValue(1000000);
                                setColorTree({color:'blue',});
                                setStep(3);
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
                                setColorValue(10000000);
                                setColorTree({color:'violet',});
                                setStep(3);
                            }
                        }
                    />
                    <Input
                        value="Prata" 
                        className='key-grey silver'
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(0.01);
                                setColorTree({color:'silver',});
                                setStep(3);
                            }
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default KeysStepOne;