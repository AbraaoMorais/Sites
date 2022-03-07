import DisplayResult from './components/displayResult';
import KeyBoardColors from './components/keyBordColors'
import Footer from './components/footer'
import React from 'react';
import './styles/App.css';
import KeyColorValueContext from './context/keyColorValueContext.js';
import { useState } from 'react';

function App(props) {

  const[colorValue, setColorValue] = useState('Rec')

  return (
    <>
      <KeyColorValueContext.Provider value={{colorValue, setColorValue}}>
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
