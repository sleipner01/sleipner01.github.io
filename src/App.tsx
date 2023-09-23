import './App.scss';

// eslint-disable-next-line import/no-unresolved
import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';
import DVDLogo from './dvd/DVDLogo';

function App() {
  return (
    <>
      <div>
        <img src={viteLogo} className='logo vite' alt='Vite logo' />
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Magnus Byrkjeland</h1>
      <h2>This site is under construction...</h2>
      <DVDLogo width={window.innerWidth} height={window.innerHeight} />
    </>
  );
}

export default App;
