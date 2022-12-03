import Content from './fragments/content';
import './styles.css';

function Help() {
  let data = "ini adalah isi help";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Help;
