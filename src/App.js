import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './my components/Header';
import Home from './my components/Home';

function App() {
  return (
    <>
      <Header/>
      <Home/>  
      <div id='about' name="about" className="section">About Section</div>
      <div id='gallery' name="gallery" className="section">Gallery Section</div>
      <div id='services' name="services" className="section">Services Section</div>
    </>
  );
}

export default App;
