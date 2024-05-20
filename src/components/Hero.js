import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Hero = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./astronaut.json'),
    });
    animate.setSpeed(0.5);
  }, []);

  return (
    <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
      <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
        <div className='container' ref={container}></div>
      </div>
      <div className='max-w-md mb-auto space-y-5'>
        <h1 className='text-5xl font-bold md:text-7xl'>Hello. I’m Aviral Tandon</h1>
        <p className='tracking-wide leading-relaxed' style={{fontSize:'18px'}}>
        A proactive Software Engineer currently leveraging my skills at <strong>General Electric</strong><br/>  With a year of dedicated experience in frontend technologies such as React JS and Angular JS, coupled with a robust command over Javascript and Typescript, I strive to deliver innovative solutions and exceed expectations.<br/><br/> My experience in the tech field has sharpened my problem-solving skills and given me a strong desire for ongoing learning and improvement. I am dedicated to keeping up with industry trends and enjoy tackling new challenges. I excel in dynamic settings where teamwork and innovation come together.{' '}
        </p>
      </div>
    </section>
  );
};

export default Hero;
