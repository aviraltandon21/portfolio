import Header from './components/Header'; 
import Hero from './components/Hero';
import React,{useState,useEffect} from 'react';
import Project from './components/Project';
import Contact from './components/Contact';
import Skill from './components/Skill';
import Load from './components/Load';
import Footer from './components/Footer';
import ExperienceData from './ExperienceData';

function App() {
  const [ loading,Setloading] = useState(true);
  useEffect(() => {
   setTimeout(() => {
    Setloading(false)
   },2000)

    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "75db8808-531d-43a0-88b8-9d845a321615";

    (function() {
      var d = document;
      var s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();

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
          <ExperienceData/>
          <Contact />
          <Footer/>
        </main>
        </>
    }
    </div>
  );
}
export default App;
