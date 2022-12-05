import Content from './fragments/content';
import './styles.css';

function Register() {
  let data = "Register";

  return (
    <div>
      <section className='content-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Register;
