import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Contactlottie = () => {
    const container = useRef(null);
  
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./rocket.json'),
      });
      animate.setSpeed(0.5);
    }, []);
  
    return (
      <section className='my-16 px-5 md:my-32 flex flex-col flex-wrap space-y-16 md:space-y-0 patterns'>
        <div className='ml-auto w-72 md:w-96 lg:w-2/5'>
          <div className='container' ref={container}></div>
        </div>
        
      </section>
    );
  };
  
  export default Contactlottie;