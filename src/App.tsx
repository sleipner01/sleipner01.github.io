import './App.scss';

import { useState } from 'react';

import DVDLogo from './dvd/DVDLogo';

function App() {
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

  // useEffect(() => {
  //   document.addEventListener(window.onresize, setWindowSize({ width: window.innerWidth, height: window.innerHeight }));

  //   return () => {
  //     document.removeEventListener(window.onresize);
  //   };
  // });

  return (
    <>
      <DVDLogo width={windowSize.width} height={windowSize.height} />
      <h1>Magnus Byrkjeland</h1>
    </>
  );
}

export default App;
