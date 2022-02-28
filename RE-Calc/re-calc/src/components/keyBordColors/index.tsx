import './keyBoardColors.css'
import React from 'react'

const keyBoardColors = () =>{
    return(
        <div className='key-board-colors-wrapper'>
            <span className='color-select-step'>
                Tolerância
            </span>
            <div className='keys-wrapper'>
                <div className='col-1'>
                    <input className='key-black' type='button'  value=''/>
                    <input className='key-brown' type='button'  value=''/>
                    <input className='key-red' type='button'    value=''/>
                    <input className='key-white' type='button' value='' />
                </div>
                <div className='col-2'>
                    <input className='key-orange' type='button'         value=''/>
                    <input className='key-yellow' type='button'         value=''/>
                    <input className='key-green' type='button'      value=''/>
                    
                </div>
                <div className='col-3'>
                    <input className='key-blue' type='button'       value=''/>
                    <input className='key-violet' type='button'         value=''/>
                    <input className='key-grey' type='button'       value=''/>
                </div>
            </div>
        </div>
    );
}

export default keyBoardColors;