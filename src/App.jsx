
import 'bootstrap/dist/css/bootstrap.min.css';
import Sliderbar from './components/Sliderbar/Sliderbar.jsx';
import Home from "./components/Home/Home.jsx";
import Contacto from "./components/Contacto/Contacto.jsx";
import Services from "./components/Services/Services.jsx";

import About from './components/About/About';

function App() {
  return (

    <>

      <Sliderbar />
      <main className='main'>
        <Home />
        <About />
        <Services />
        <Contacto />
      </main>
    </>

  );
}

export default App
