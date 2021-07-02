import Header from './components/Header';
import Main from './components/Main/Main'
import Footer from './components/Footer';
import ContextHolder from './context/ContextHolder';
import './globals.css'

function App() {

  return (


        <ContextHolder>
          <Header />
          <Main />
          <Footer />
        </ContextHolder>
   

  );
}

export default App;
