import './App.css'
import Form from 'react-bootstrap/Form';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Paths from './All paths/Paths';
import AuthCarousel from './components/AuthSlider';
import AuthSlider from './components/AuthSlider';


function App() {
 
  return (
    <>
    <div >
   <Navbar/>
  <AuthSlider/>
   <Paths/>
    </div>
    </>
  )
}

export default App
