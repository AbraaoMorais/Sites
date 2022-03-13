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

  return (
    <>
      <KeyColorValueContext.Provider value={{colorValue, setColorValue, colorOne, colorTwo, colorTree, colorFor, setColorOne, setColorTwo, setColorTree, setColorFor, step, setStep}}>
        <main className="App">
          <header className="App-header">
            <DisplayResult
              resistenceValue={colorValue}
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
