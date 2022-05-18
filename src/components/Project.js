import React from 'react';
import projects from '../projectData';
import { FaLink,FaGithub } from "react-icons/fa";
import Circle from './Circle';
import Text from 'react-svg-text';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
const mystyle = {
  width: '32px',
  height: '32px',
};
const yourstyle = {
  width: '500px',
  height: '300px'
};

const Project = () => {
  
  return (
    <>
      <article className='my-28 px-5' id='projects'>
      
      <header className='text-2xl font-bold pt-10'>
      
          <h2><RoughNotation type="circle" show="true" color='blue' animationDuration='2000' padding={[15, 12, 15, 12]}>Projects</RoughNotation></h2>
      
      </header>
      {/* <Circle>
        
      </Circle> */}
      {/* <header className='text-2xl font-bold pt-10 circle-sketch-highlight'>
          <h2 className='circle-sketch-highlight'>Projects</h2>
      </header> */}
      {/* <Circle>
        <Text verticalAnchor="start" x="100" y="100">Helloo</Text>
      </Circle> */}
      {/* <div style={{position: "relative"}}>
        <Circle>
          <div style={{position: "absolute"}}>
            <text style={{fontColor: "white", left: "100px",right: "100px"}}>Projects</text>
          </div>
        </Circle>
      </div> */}
        <div className='my-7 space-y-24'>
          {projects.map((project, index) => (
            <div className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <img
                src={project.image}
                style={yourstyle}
                alt={project.title}
                className={index % 2 === 0 ? 'w-full md:w-6/12 rounded-lg shadow-lg ' : 'w-full md:w-6/12 rounded-lg shadow-lg md:order-1'}
              />
              <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-bold text-lg'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='flex overflow-auto space-x-3 pb-2 flex-wrap'>
                  {project.tools.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index}>
                      {disc}
                    </span>
                  ))}
                </div>
                <div className='w-auto flex space-x-5 relative'>
                  <a href={project.github} target='_blank' rel='noreferrer'>
                    <FaGithub style={mystyle}/>
                  </a>
                  <a href={project.link} target='_blank' rel='noreferrer'>
                    <FaLink style={mystyle}/>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
      <div className='mx-5'>
        <a href='https://github.com/aviraltandon21' target='_blank' rel='noreferrer' className='bg-gray block shadow-lg uppercase border border-gray-500 rounded-lg text-center my-12 p-2 max-w-xs m-auto hover:bg-black'>
          <span>See more on Github</span>
        </a>
      </div>
    </>
  );
};

export default Project;