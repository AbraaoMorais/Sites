import React,{useContext } from "react"
import Input from './Input';
import StepAndAcessibility from './stepAndAcessibility'
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface KeysStepOneInterface {
    
    colorValue: number | undefined,
    colorFor: object | undefined,
    nameColor: boolean,
    step: number,
    setColorValue: Function,
    setColorFor: Function,
    setStep: Function,
    getValue: Function,
}

interface colorInterface{
    color: string,
}

const KeysStepOne = (props: KeysStepOneInterface) =>{
   
     //contexto
     const {colorValue, setColorValue, nameColor, setColorFor, step, setStep} = useContext<KeysStepOneInterface>(KeyColorValueContext);

     const isMobile = window.innerWidth < 1024 ? true : false
    return(
        <>
            <div className="key-step-wrapper"> 
                <StepAndAcessibility
                    acessibility={isMobile ? true : false}
                    step="Anel de Tolerância"
                />
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
                                setColorFor({ color: 'silver',val: 0}) as colorInterface;
                                setStep(4);
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
                                setColorValue(9);
                                setColorFor({color:'red',val: 9});
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
                                setColorFor({color:'gold',val: 1});
                                setStep(4);
                            }
                        }
                    />
                    <Input 
                        value={nameColor === true ? 'Laranja' : ' '}   
                        className='key-orange orange' 
                        colorValue={3}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(3);
                                setColorFor({color:'orange',val: 3});
                                setStep(4);
                            }
                        }
                    />

                </div>
                <div className='col-3'>
                <Input 
                        value={nameColor === true ? 'Marron' : ' '}  
                        className='key-brown brown' 
                        colorValue={colorValue}
                        onClickBtn={
                            ()=>{
                                props.getValue();
                                setColorValue(2);
                                setColorFor({color:'brown',val: 2});
                                setStep(4);
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
                                setColorFor({color:'yellow',val: 4});
                                setStep(4);
                            }
                        }
                    />
                </div>
               
                </div>
                <div style={{height: '7vmax'}}>
                      
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
            </div>  
        </>
    )
}

export default KeysStepOne;