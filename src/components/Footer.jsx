import React from 'react';
import logo from '/logo2.svg';
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import youtube from '../assets/youtube.svg';

const Footer = () => {
  return (
    <footer className="footer bg-neutral items-center p-4 px-16">
      <aside className="grid-flow-col items-center">
        <img className='w-10' src={logo} alt="logo" />
        <h1 className='text-lg'>Copyright © {new Date().getFullYear()} - All right reserved</h1>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/khusheranjan" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/khushe-ranjan/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.youtube.com/@KhusheRanjan" target="_blank" rel="noopener noreferrer">
          <img className='pt-[6px]' src={youtube} alt="YouTube" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
