import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Load = () => {
    const container = useRef(null);
  
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./loading.json'),
      });
      animate.setSpeed(0.5);
    }, []);
  
    return (
      <section className='load'>
        <div className='w-72 md:w-96 lg:w-120'>
          <div className='container' ref={container}></div>
        </div>
        
      </section>
    );
  };
  
  export default Load;