import './TypeWriter.scss';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <p className='fourth'>but I wanted the page to stand out!</p>
        <p className='fifth'>You see, in good Norwegian I&apos;m &quot;miljøskadd&quot;...</p>
        <p className='sixth'>My dad is an airline pilot.</p>
        <p className='seventh'>So this page looks like the</p>
        <p className='eighth'>communication displays found in the cockpit.</p>
        <p className='ninth'>Though it kind of looks like an old computer screen too!</p>
        <br />
        <p className='tenth'>Anyway...</p>
        <p className='eleventh'>You can find my Github, LinkedIn &apos;n stuff below:</p>
        <div className='twelvth socials-container'>
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
        <p className='thirteenth'>Wow! You&apos;re still here?? Impressive!</p>
        <p className='fourteenth'>K&apos; then, I have some more to show you...</p>
        <p className='fifteenth'>
          <Link to='/portfolio' className='link'>
            Click me ❤️
          </Link>
        </p>
      </div>
    </>
  );
};

export default TypeWriter;
