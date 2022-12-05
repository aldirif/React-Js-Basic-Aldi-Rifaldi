import './styles.css';

function Content (prop) {
  
  return(
    <section>
      <h2 className='content-wrapper'>Shopping</h2>
      <p>{prop.data}</p>
    </section>
  );
}

export default Content;