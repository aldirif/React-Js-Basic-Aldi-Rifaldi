import Content from './fragments/content';
import './styles.css';

function Register() {
  let data = "Register";

  return (
    <div>
      <section className='register-container'>
        <Content data={data} />
      </section>
    </div>
  );
}

export default Register;
