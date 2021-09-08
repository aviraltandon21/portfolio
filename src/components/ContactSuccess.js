import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const ContactSuccess = () => {
    const container = useRef(null);
  
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./tick.json'),
      });
      animate.setSpeed(0.5);
    }, []);
  
    return (
          <div className='container' ref={container}></div>
    );
  };
  
  export default ContactSuccess;