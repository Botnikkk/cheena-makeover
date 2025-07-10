import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './my components/Header';
import Home from './my components/Home';
import About from './my components/About';
import Gallery from './my components/Gallery';
import Services from './my components/Services';

function App() {
  return (
    <>
      <Header/>
      <Home/>  
      <About/>  
      <Gallery/>  
      <Services/>  
    </>
  );
}

export default App;
