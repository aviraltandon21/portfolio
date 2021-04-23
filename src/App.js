import Header from './components/Header'; 
import Hero from './components/Hero';
import React,{useState,useEffect} from 'react';
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";
import Project from './components/Project';
import Contact from './components/Contact';
import Skill from './components/Skill';

const override = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

function App() {
  const [ loading,Setloading] = useState(true);
  useEffect(() => {
   setTimeout(() => {
    Setloading(false)
   },2000)
  },[])
  return (
    <div className='App container my-10 mx-auto max-w-screen-lg bg-black'>
    {
      loading ?
      <HashLoader

          css={override}
          size={80}
          color={"#1C3177"}
          loading={loading}
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