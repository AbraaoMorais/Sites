import DisplayResult from './components/displayResult';
import KeyBoardColors from './components/keyBordColors'
import Footer from './components/footer'
import React from 'react';
import './styles/App.css';
import KeyColorValueContext from './context/keyColorValueContext.js';
import { useState } from 'react';

function App(props) {

  //é mobile?
  const isMobile = window.innerWidth < 1024 ? true : false
  //value of color selected
  const[colorValue, setColorValue] = useState('Rec');
  //this variable color is css atribute , step is step of calc
  const [colorOne, setColorOne] = useState({color: 'white', val: null});
  const [colorTwo, setColorTwo] = useState({color: 'white', val: null});
  const [colorTree, setColorTree] = useState({color: 'white',val: null});
  const [colorFor, setColorFor] = useState({color: 'white',val: null});
  const [step,setStep] = useState(0)
  
  //Recursos de acessibilidade
  const [nameColor, setNameColor] = useState(false);
 
  //ohms - kilo ohms - mega ohms
  let fisicFactor = 'Ω';

  //calculo de resultado
    const resultado = ()=>{

      //convert values to string
      let fisrtCalc = colorOne.val.toString() + colorTwo.val.toString();
      let secondCalc = Number(fisrtCalc) * colorTree.val;

      // CONVERTE PARA AS GRANDEZAS KILO E MEGA
      if(secondCalc >=10000 && secondCalc < 1000000){
  
        secondCalc = secondCalc/1000;
        
        fisicFactor = "K";
 
  
      }else if(secondCalc >= 1000000){
  
        secondCalc = secondCalc/1000000;
       
        fisicFactor = "M";
        
      }

      //verifica se tem virgula, define quantidade de casas decimais após a virgula e retorna valor em string;
      return Number.isInteger(secondCalc) ? secondCalc : secondCalc.toFixed(2)
    }
 
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
        
        <main className={isMobile === true ? "App mobile-details": "App"}>
          <header className="App-header">
            <DisplayResult
              resistenceValue={step == 4 ? resultado() : 'rec'+(step+1)}
              resultType= {fisicFactor}
            />
          </header>

          <section className='section-keybord'>
            <KeyBoardColors/>
          </section>

          <Footer/>
        </main>
      </KeyColorValueContext.Provider>
    </>
  );
}

export default App ;
