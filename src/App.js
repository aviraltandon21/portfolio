import Header from './components/Header'; 
import Hero from './components/Hero';
import React,{useState,useEffect} from 'react';
import Project from './components/Project';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Load from './components/Load';


function App() {
  const [ loading,Setloading] = useState(true);
  useEffect(() => {
   setTimeout(() => {
    Setloading(false)
   },4000)
  },[])
  return (
    <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
    {
      loading ?
      <Load
        />
      : <>
      <Header />
        <main>
          <Hero />
          <Project />
          <Skill />
          <Contact />
        </main>
        </>
    }
    </div>
  );
}
export default App;
