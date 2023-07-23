import './App.css';
import Apage from './Apage';
import Bpage from './Bpage';

function App() {

  const bool = false;

  return (
    <>
    {
      bool == true
      ? <div><Bpage/></div>
      : <div><Apage/></div>
    }
    </>
  );
}

export default App;
