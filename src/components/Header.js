import React from 'react';

const head = {
  position: 'sticky',
  top: '0',
  width: '100%',
  overflow: 'hidden',
  backgroundColor: 'rgb(18,18,18)',
  padding: '10px 0'

};

const Header = () => {
  return (
    <nav className='space-x-10' style={head}>
      <ul className='flex flex-row md:text-xl justify-center md:justify-end'>
        <li>
          <a href='#projects' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Projects
          </a>
        </li>
        <li>
          <a href='#skill' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Skills
          </a>
        </li>
        <li>
          <a href='#experience' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Experience
          </a>
        </li>
        <li>
          <a href='#contact' className='py-1 px-5 hover:bg-gray focus:bg-gray rounded-lg'>
            Contact
          </a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Header;