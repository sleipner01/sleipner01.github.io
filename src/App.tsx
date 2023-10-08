import './App.scss';

import helloMascot from './assets/helloMascot.svg';
import smilingMascot from './assets/smilingMascot.svg';
// eslint-disable-next-line import/no-unresolved
import DVDLogo from './dvd/DVDLogo';

function App() {
  return (
    <>
      <DVDLogo width={window.innerWidth} height={window.innerHeight} />
      <img src={helloMascot} width='100' alt='' />
      <img src={smilingMascot} width='100' alt='' />
      <h1>Magnus Byrkjeland</h1>
    </>
  );
}

export default App;
