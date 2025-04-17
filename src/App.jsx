import Navbar from './components/Navbar'
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div className='w-screen h-auto'>
      <Navbar/>
      <Homepage/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
    
    
  )
}

export default App;
