import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Stories from './components/Stories';

function App() {
  return (
    <div className='w-screen h-auto'>
      <Navbar/>
      <Homepage/>
      <About/>
      <Stories/>
      <Contact/>
      <Footer/>
    </div>
    
    
  )
}

export default App;
