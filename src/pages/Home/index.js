import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Home() {
  
  return (
    <div>
      <section className='content-container'>
        <Content />
        <Sidebar />
      </section>
    </div>
  );
}

export default Home;
