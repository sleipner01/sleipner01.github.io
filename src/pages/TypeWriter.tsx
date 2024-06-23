import './TypeWriter.scss';

import { useEffect, useState } from 'react';

import GithubIcon from '../assets/github-green.svg';
import LinkedinIcon from '../assets/linkedin-green.svg';
import DVDLogo from '../components/DVD/DVDLogo';

const TypeWriter = () => {
  // Viewport size to update the DVD logo playground
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <DVDLogo width={viewportSize.width} height={viewportSize.height} />

      <div className='typewriter-container'>
        <p className='first'>Magnus Byrkjeland&apos;s Personal Website 🚀</p>
        <p className='second'>Sick right!?</p>
        <p className='third'>Maybe not what you thought you would find...</p>
        <br />
        <p className='fourth'>Anyway...</p>
        <p className='fifth'>You can find my Github, LinkedIn &apos;n stuff below:</p>
        <div className='sixth socials-container'>
          <div className='github'>
            <a href='https://github.com/sleipner01' target='_blank' rel='noreferrer'>
              <img src={GithubIcon} alt='Github' />
            </a>
          </div>
          <div className='linkedin'>
            <a href='https://www.linkedin.com/in/magnusbyrkjeland/' target='_blank' rel='noreferrer'>
              <img src={LinkedinIcon} alt='LinkedIn' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypeWriter;
