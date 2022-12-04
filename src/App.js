import { useState } from 'react';
import './App.css';
import Feature from './pages/Feature';
import Header from './components/Header';
import Home from './pages/Home';
import Help from './pages/Help';
import Footer from './components/Footer';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Feature />}
    else if(menu === 3) {return <Help/>}
  }

  return (
    <div className="App">
      <Header onClick={setMenu} />
      {content()}
      <Footer/>
    </div>
  );
}

export default App;
