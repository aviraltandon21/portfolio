import React from 'react';

const Skill = () => {
  return (
    <section className='my-28  px-5' id='skill'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Skills & Tools</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='HTML 5'>
          <img src='./images/icons/html5-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          HTML5
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='CSS 3'>
          <img src='./images/icons/css3-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          CSS3
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Javascript'>
          <img src='./images/icons/javascript-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Javascript
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='JQuery'>
          <img src='./images/icons/jquery.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          JQuery
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='React Js'>
          <img src='./images/icons/react-original.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          React JS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Node Js'>
          <img src='./images/icons/nodejs-icon.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Node JS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='MongoDB'>
          <img src='./images/icons/mongodb-icon.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          MongoDB
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='PHP'>
          <img src='./images/icons/php.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          PHP
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Flutter'>
          <img src='./images/icons/flutter_logo.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Flutter
        </div>
        
      </div>
    </section>
  );
};

export default Skill;