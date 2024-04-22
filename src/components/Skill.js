import React from 'react';

const Skill = () => {
  return (
    <>
    
    <section className='my-28  px-5' id='skill'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Languages & Frameworks</h2>
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
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Redux'>
          <img src='./images/icons/redux.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Redux
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Gatsby JS'>
          <img src='./images/icons/gatsbyjs-icon.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Gatsby JS
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='GraphQL'>
          <img src='./images/icons/GraphQL_Logo.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          GraphQL
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Bootstrap'>
          <img src='./images/icons/icons8-bootstrap.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Bootstrap
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Tailwind'>
          <img src='./images/icons/tailwind-css.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Tailwind CSS
        </div>
      </div>
    </section>

    

    <section style={{marginTop: "-80px"}} className='my-28  px-5' id='skill'>
      <header className='text-2xl font-bold pt-10'>
        <h2>Tools & Technologies</h2>
      </header>
      <div className='my-7 grid gap-5 grid-cols-3 md:grid-cols-6'>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Git'>
          <img src='./images/icons/icons8-git.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Git
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Github'>
          <img src='./images/icons/github.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Github
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Firebase'>
          <img src='./images/icons/icons8-firebase.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Firebase
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Strapi'>
          <img src='./images/icons/strapi-2.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Strapi
        </div>
        <div className='flex flex-col items-center' tabIndex='0' role='img' aria-label='Postman'>
          <img src='./images/icons/postman-icon.svg' alt='' loading='lazy' className='w-16 mb-1' width='64px' height='64px' />
          Postman
        </div>
        
      </div>
    </section>
    
    </>
  );
};

export default Skill;