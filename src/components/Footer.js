import logo from '../logo.svg';
import './styles.css';

function Footer(prop) {

  return(
    <div>
      <footer className='footer-wrapper'>
        <img src={logo} alt="logo" />
        <h1 className='footer-title' >Footer</h1>
      </footer>
    </div>
  );
}

export default Footer;