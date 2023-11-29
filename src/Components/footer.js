import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className='bg-gray-100  text-gray-800 footer2'>
    <div className='container'>
      <div className='text-center py-2'>
        <div className='flex gap-4 mb-2 justify-content-center'>
          <a
            href='https://github.com/gokulmathew?tab=repositories'
            target='_blank'
            rel='noreferrer'
            className='text-gray-800 text-lg hover:text-indigo-600'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href='https://www.linkedin.com/in/gokul-srinivasan-111156157/'
            target='_blank'
            rel='noreferrer'
            className='text-gray-800 text-lg hover:text-indigo-600'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href='https://www.linkedin.com/in/gokul-srinivasan-%F0%9F%9A%80-111156157/'
            target='_blank'
            rel='noreferrer'
            className='text-gray-800 text-lg hover:text-indigo-600'
          >
            <FontAwesomeIcon icon={faMedium} />
          </a>
        </div>
        <p className='mb-0'>&copy; Gokul {new Date().getFullYear()}</p>
      </div>
    </div>
  </footer>
);

export default Footer;
