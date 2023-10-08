import './App.scss';

// eslint-disable-next-line import/no-unresolved
import DVDLogo from './dvd/DVDLogo';

function App() {
  return (
    <>
      <DVDLogo width={window.innerWidth} height={window.innerHeight} />
      <h1>Magnus Byrkjeland</h1>
    </>
  );
}

export default App;
