import React from "react";

interface Input{
    className: string,
    onClickBtn: any,
    colorValue: any
}

const Input =(props : Input)=>{
    return(
        <input type='button' value='' className={props.className} onClick={props.onClickBtn}/>
    )
}

export default Input;