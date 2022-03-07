import React from "react"
import { useState,useContext } from "react"
import Input from './Input'
import KeyColorValueContext from '../../context/keyColorValueContext.js'

interface KeysStepOneInterface {
    getValue: Function,
    colorValue: number | undefined,
    setColorValue: Function
}


const KeysStepOne = (props: KeysStepOneInterface) =>{
   
    //contexto
    const {colorValue, setColorValue} = useContext<KeysStepOneInterface>(KeyColorValueContext)
    
    return(
        <>
            <span className='color-select-step'>
                Cor 2
            </span>
            
            <div className='keys-wrapper'>
                <div className='col-1'>

                    <Input    
                        className='key-black' 
                        colorValue= {colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(0)}}
                     />
                    <Input 
                        className='key-brown' 
                        colorValue={colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(1)}}
                    />
                    <Input 
                        className='key-red' 
                        colorValue={colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(2)}}
                    />
                    <Input 
                        className='key-white'
                        colorValue={colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(9)}}
                    />

                </div>
                <div className='col-2'>
                    <Input 
                        className='key-orange' 
                        colorValue={3}
                        onClickBtn={()=>{props.getValue();setColorValue(3)}}
                    />
                    <Input 
                        className='key-yellow'
                        colorValue={4}
                        onClickBtn={()=>{props.getValue();setColorValue(4)}}
                    />
                    <Input 
                        className='key-green' 
                        colorValue={colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(5)}}
                    />

                </div>
                <div className='col-3'>
                    <Input 
                        className='key-blue' 
                        colorValue={colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(6)}}
                    />
                    <Input
                        className='key-violet' 
                        colorValue={colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(7)}}
                    />
                    <Input 
                        className='key-grey'
                        colorValue={colorValue}
                        onClickBtn={()=>{props.getValue();setColorValue(8)}}
                    />
                </div>
            </div>
        </>
    )
}

export default KeysStepOne;