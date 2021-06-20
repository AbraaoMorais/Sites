import React from 'react'
// import { Component } from 'react'

class SwithPage extends React.Component{
     
    constructor(props){
        super(props);
        this.state = {msg:true};
        this.msg = this.msg.bind(this);
    }
    msg = () => {
            this.setState(prevState => ({
                msg: !prevState.msg
              }))
        }
    
    render(){
        return(
            <button onClick={this.msg}> teste bottom   {this.state.msg ? 'ON' : 'OFF'}</button>
        );
    }
}

export default SwithPage