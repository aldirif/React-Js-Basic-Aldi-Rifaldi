import Content from './fragments/content';
import './styles.css';

function Review() {
  let data = "ini adalah isi review";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Review;
