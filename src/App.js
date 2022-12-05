import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Apps from './pages/Product/App';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer';

function App() {
  const [menu, setMenu] = useState(1);

  const content = () => {
    if (menu === 1) {return <Home/>}
    else if(menu === 2) {return <Apps/>}
    else if(menu === 3) {return <Login />}
    else if(menu === 4) {return <Register />}
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
