import Content from './fragments/content';
import './styles.css';

function Library() {
  let data = "ini adalah isi library";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Library;
