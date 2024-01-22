import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="lg:hidden flex items-center justify-center space-x-4">
        <a href="https://www.linkedin.com/in/batrick-swaistan-b941b2236/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://www.github.com/batrick-swaistan/" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="mailto:batrickswaistan@gmail.com" target="_blank" rel="noopener noreferrer">
          <HiOutlineMail size={30} />
        </a>
        
      </div>
      <p className="text-center mt-2">© Batrick Swaistan</p>
    </footer>
  );
};

export default Footer;
