import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const Circle = () => {
    const container = useRef(null);
  
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('./circle_around_text.json'),
      });
      animate.setSpeed(0.5);
    }, []);
  
    return (
          <div className='circle-container' ref={container}></div>
    );
  };
  
  export default Circle;