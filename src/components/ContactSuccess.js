import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import animate from 'lottie-web';

const ContactSuccess = () => {
    const container = useRef(null);
  
    useEffect(() => {
      Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('./form-submitted.json'),
      });
      animate.setSpeed(2.0);
    }, []);
  
    return (
          <div className='container form-submitted' ref={container}></div>
    );
  };
  
  export default ContactSuccess;