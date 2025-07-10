import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './my components/Header';
import Home from './my components/Home';
import About from './my components/About';
import Gallery from './my components/Gallery';

function App() {
  return (
    <>
      <Header/>
      <Home/>  
      <About/>  
      <Gallery/>  
      <div id='services' name="services" className="section">Services Section</div>
    </>
  );
}

export default App;
