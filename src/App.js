import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './my components/Header';
import Home from './my components/Home';
import About from './my components/About';

function App() {
  return (
    <>
      <Header/>
      <Home/>  
      <About/>  
      <div id='gallery' name="gallery" className="section">Gallery Section</div>
      <div id='services' name="services" className="section">Services Section</div>
    </>
  );
}

export default App;
