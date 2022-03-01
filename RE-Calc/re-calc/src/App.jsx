import DisplayResult from './components/displayResult';
import KeyBoardColors from './components/keyBordColors'
import Footer from './components/footer'
import hideSearchMobile from './utils/hideSearchBarMobile'
import './styles/App.css';

function App() {
  hideSearchMobile();
  return (
    <>
      <main className="App">
        <header className="App-header">
          <DisplayResult/>
        </header>
        <section>
          <KeyBoardColors/>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App ;
