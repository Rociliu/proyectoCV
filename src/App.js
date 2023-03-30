import { useState } from 'react'; //importo el useState para usarlo después
import './App.css';
//importo los componentes que voy a utilizar
import About from './components/About/About';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Hero from './components/Hero/Hero';
import More from './components/More/More';

import { CV } from './CV/CV';



const { hero, education, experience, languages, habilities } = CV; //hago el destructuring de mi const CV para poder pasar por prop los elementos


function App() {
  const [showEducation, setShowEducation]= useState("1");
  
  return (
    
    <div className="App">
     {/* pasamos por props la información a cada componente: Ej. los componentes Hero y About tendrán la info que hay en hero */}
      <img src={hero.image} alt='FotoCV'/>
    
  
      <Hero hero={hero} />

      <About hero={hero} />

      <nav>
        <div className='container-btn'>
          <button className='custom-btn' onClick={()=>setShowEducation("1")}>Formación</button>
          <button className='custom-btn' onClick={()=>setShowEducation("2")}>Experiencia</button>
          <button className='custom-btn' onClick={()=>setShowEducation("3")}>Más</button>
        </div>
      </nav>
      
      <div>
        {showEducation === "1" ? 
        (<Education education={education} />): 

        showEducation === "2" ?
        (<Experience experience={experience} />):

        showEducation === "3" ?
        (<More languages={languages} habilities={habilities}/>): 
        (<Education education={education}/>)
        }
      
      </div>
    </div>
  );
}

export default App;
