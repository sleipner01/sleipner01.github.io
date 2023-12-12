import './Portfolio.scss';

import ViteIcon from '../../public/vite.svg';

function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>Welcome!</h1>
      <p>This is going to be my portfolio page.</p>
      <p>It&apos;s still under construction😓</p>
      <p>But I&apos;m working on it!</p>
      <p>Check back later!</p>
      <p>It will actually be sick!</p>
      <p>Promise!🤞</p>
      <p>In the meantime you can look at this spinning Vite Logo...</p>
      <img src={ViteIcon} width='200px' alt='Vite Logo' />
    </div>
  );
}

export default Portfolio;
