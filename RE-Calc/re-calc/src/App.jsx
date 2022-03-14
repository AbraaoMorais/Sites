import DisplayResult from './components/displayResult';
import KeyBoardColors from './components/keyBordColors'
import Footer from './components/footer'
import React from 'react';
import './styles/App.css';
import KeyColorValueContext from './context/keyColorValueContext.js';
import { useState } from 'react';

function App(props) {


  //value of color selected
  const[colorValue, setColorValue] = useState('Rec');
  //this variable color is css atribute , step is step of calc
  const [colorOne, setColorOne] = useState({color: 'white', val: null});
  const [colorTwo, setColorTwo] = useState({color: 'white', val: null});
  const [colorTree, setColorTree] = useState({color: 'white',val: null});
  const [colorFor, setColorFor] = useState({color: 'white',val: null});
  const [step,setStep] = useState(0)
  
  //Recursos de acessibilidade
  const [nameColor, setNameColor] = useState(false)

  //calculo de resultado
 
  const resultado = ()=>{

    //convert values to string
    let fisrtCalc = colorOne.val.toString() + colorTwo.val.toString();
    
    let secondCalc = Number(fisrtCalc) * colorTree.val;
    
    // secondCalc >= 10000 ? 
    return secondCalc 
    
  }
 
  // console.log('Total da operação :' + resultado())  

  
  // console.log('Total da operação ' + colorOne.color) 

  return (
    <>
      <KeyColorValueContext.Provider value={
        {
          step,
          colorOne,
          colorTwo,
          colorFor,
          nameColor, 
          colorTree, 
          colorValue,
          setColorValue,
          setColorTree,
          setNameColor,
          setColorFor,
          setColorTwo, 
          setColorOne, 
          setStep
        }}>
        
        <main className="App">
          <header className="App-header">
            <DisplayResult
              resistenceValue={step > 2 ? resultado() : colorValue}
            />
          </header>
            
          <section>
          
            <KeyBoardColors/>
          </section>
        </main>
        
        <Footer/>
      </KeyColorValueContext.Provider>
    </>
  );
}

export default App ;
