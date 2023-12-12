import './App.scss';

import { useEffect, useState } from 'react';

import DVDLogo from './dvd/DVDLogo';

function App() {
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
      <h1>Magnus Byrkjeland</h1>
    </>
  );
}

export default App;
