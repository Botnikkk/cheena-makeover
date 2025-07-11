import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import{BrowserRouter,Routes,Route}from'react-router-dom'

import Header from './my components/Header';
import Home from './my components/Home';
import About from './my components/About';
import Gallery from './my components/Gallery';
import Services from './my components/Services';
import Bridal from './my components/Bridal';
import Editorial from './my components/Editorial';
import Booking from './my components/Booking';



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/cheena-makeover' element={<><Home/><About/><Gallery/><Services/></>}/>
        <Route exact path='/bridal' element={<><Bridal/></>}/>
        <Route exact path='/editorial' element={<><Editorial/></>}/>
        <Route exact path='/booking' element={<><Booking/></>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
