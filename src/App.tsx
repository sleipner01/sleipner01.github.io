import './App.scss';

import DVDLogo from './components/DVD/DVDLogo';
import TypeWriter from './components/TypeWriter/TypeWriter';

function App() {
  return (
    <>
      <DVDLogo width={window.innerWidth} height={window.innerHeight} />
      <TypeWriter />
    </>
  );
}

export default App;
