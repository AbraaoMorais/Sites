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
  const [colorOne, setColorOne] = useState({color: 'white',});
  const [colorTwo, setColorTwo] = useState({color: 'white',});
  const [colorTree, setColorTree] = useState({color: 'white',});
  const [colorFor, setColorFor] = useState({color: 'white',});
  const [step,setStep] = useState(0)
  
  //Recursos de acessibilidade
  const [nameColor, setNameColor] = useState(false)

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
              resistenceValue={step > 3 ? colorValue : colorValue}
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
