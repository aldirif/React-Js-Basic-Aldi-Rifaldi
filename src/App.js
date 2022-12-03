import { useState } from 'react';
import './App.css';
import Feature from './pages/Feature';
import Header from './components/Header';
import Home from './pages/Home';
import Help from './pages/Help';
import Library from './pages/Library';
import Review from './pages/Review';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Feature />}
    else if(menu === 3) {return <Help/>}
    else if(menu === 4) {return <Library/>}
    else if(menu === 5) {return <Review/>}
    else if(menu === 6) {return <Feature />}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      {content()}
    </div>
  );
}

export default App;
